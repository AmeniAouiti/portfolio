import type { Plugin } from "vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** Mock Vercel API routes locally — the real handlers need Supabase secrets. */
function mockApiRoutes(): Plugin {
  return {
    name: "mock-api-routes",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url === "/api/projects" || url === "/api/experiences") {
          res.setHeader("Content-Type", "application/json");
          res.end("[]");
          return;
        }
        if (url === "/api/translate" && req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => { body += chunk; });
          req.on("end", async () => {
            try {
              const { text, source = "en", target = "fr" } = JSON.parse(body);
              const apiUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${source}|${target}`;
              const r = await fetch(apiUrl);
              const data = (await r.json()) as { responseData?: { translatedText?: string } };
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ translated: data?.responseData?.translatedText || text }));
            } catch {
              res.statusCode = 500;
              res.end(JSON.stringify({ error: "Translation failed" }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(async () => {
  const plugins = [react(), tailwindcss(), mockApiRoutes()];
  try {
    // @ts-expect-error - optional source tags plugin may not exist
    const m = await import("./.vite-source-tags.js");
    plugins.push(m.sourceTags());
  } catch {
    /* source tags plugin not available — safe to ignore */
  }
  return { plugins };
});
