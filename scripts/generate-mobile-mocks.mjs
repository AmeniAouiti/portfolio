import { buildCollage, svgToPng } from "./lib/phone-collage.mjs";

const W = 390;
const H = 844;

function statusBar(bg = "#0f172a", fg = "#e2e8f0") {
  return `
    <rect width="${W}" height="54" fill="${bg}"/>
    <text x="28" y="34" fill="${fg}" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="600">9:41</text>
    <rect x="318" y="22" width="22" height="11" rx="3" fill="none" stroke="${fg}" stroke-width="1.5"/>
    <rect x="320" y="24" width="14" height="7" rx="1.5" fill="${fg}"/>
  `;
}

function safeSiteLogin() {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#111827"/>
        <stop offset="100%" stop-color="#1f2937"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#bg)"/>
    ${statusBar("#111827")}
    <circle cx="195" cy="150" r="42" fill="#f59e0b" opacity="0.15"/>
    <rect x="155" y="118" width="80" height="64" rx="12" fill="#f59e0b"/>
    <rect x="175" y="98" width="40" height="18" rx="6" fill="#d97706"/>
    <text x="195" y="210" text-anchor="middle" fill="#fff" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="700">SafeSite</text>
    <text x="195" y="238" text-anchor="middle" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="14">Connect · Chantier BTP</text>
    <rect x="36" y="290" width="318" height="52" rx="14" fill="#1e293b" stroke="#334155"/>
    <text x="56" y="322" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="14">Email professionnel</text>
    <rect x="36" y="358" width="318" height="52" rx="14" fill="#1e293b" stroke="#334155"/>
    <text x="56" y="390" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="14">Mot de passe</text>
    <rect x="36" y="440" width="318" height="54" rx="16" fill="#f59e0b"/>
    <text x="195" y="473" text-anchor="middle" fill="#111827" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700">Se connecter</text>
    <text x="195" y="530" text-anchor="middle" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="12">Accès sécurisé JWT · Rôles admin / terrain</text>
    <rect x="36" y="580" width="150" height="88" rx="16" fill="#1e293b"/>
    <text x="56" y="610" fill="#f59e0b" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700">12</text>
    <text x="56" y="632" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="11">Chantiers actifs</text>
    <rect x="204" y="580" width="150" height="88" rx="16" fill="#1e293b"/>
    <text x="224" y="610" fill="#38bdf8" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700">QR</text>
    <text x="224" y="632" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="11">Validations terrain</text>
  </svg>`;
}

function safeSiteDashboard() {
  const sites = [
    ["Tour A — La Marsa", "24 ouvriers · 8 équip.", "#22c55e"],
    ["Résidence Lac 2", "18 ouvriers · 5 équip.", "#f59e0b"],
    ["Pont Sfax Nord", "31 ouvriers · 12 équip.", "#38bdf8"],
  ];
  const rows = sites
    .map(
      ([title, sub, color], i) => `
    <rect x="24" y="${170 + i * 96}" width="342" height="78" rx="18" fill="#1e293b"/>
    <circle cx="48" cy="${209 + i * 96}" r="8" fill="${color}"/>
    <text x="68" y="${205 + i * 96}" fill="#f8fafc" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="600">${title}</text>
    <text x="68" y="${226 + i * 96}" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="12">${sub}</text>
    <text x="330" y="${214 + i * 96}" text-anchor="end" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="11">Voir</text>
  `,
    )
    .join("");

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="#0f172a"/>
    ${statusBar()}
    <text x="24" y="92" fill="#fff" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700">Tableau chantier</text>
    <text x="24" y="118" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="13">Mardi 6 juillet 2026</text>
    <rect x="24" y="136" width="342" height="1" fill="#1e293b"/>
    ${rows}
    <rect x="24" y="470" width="160" height="74" rx="16" fill="#172554"/>
    <text x="40" y="500" fill="#93c5fd" font-family="Segoe UI, Arial, sans-serif" font-size="12">Équipements</text>
    <text x="40" y="526" fill="#fff" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="700">47</text>
    <rect x="206" y="470" width="160" height="74" rx="16" fill="#422006"/>
    <text x="222" y="500" fill="#fcd34d" font-family="Segoe UI, Arial, sans-serif" font-size="12">Alertes</text>
    <text x="222" y="526" fill="#fff" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="700">3</text>
    <rect x="24" y="760" width="342" height="64" rx="22" fill="#111827" stroke="#334155"/>
    <text x="70" y="800" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="12">Accueil</text>
    <text x="170" y="800" fill="#f59e0b" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700">Sites</text>
    <text x="270" y="800" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="12">QR Scan</text>
  </svg>`;
}

function safeSiteQr() {
  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="#020617"/>
    ${statusBar("#020617")}
    <text x="24" y="92" fill="#fff" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="700">Scanner QR</text>
    <text x="24" y="118" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="13">Point de contrôle — Zone B</text>
    <rect x="55" y="160" width="280" height="280" rx="24" fill="#0f172a" stroke="#334155"/>
    <rect x="95" y="200" width="200" height="200" fill="#fff"/>
    <rect x="110" y="215" width="24" height="24" fill="#111827"/>
    <rect x="256" y="215" width="24" height="24" fill="#111827"/>
    <rect x="110" y="351" width="24" height="24" fill="#111827"/>
    <rect x="140" y="245" width="12" height="12" fill="#111827"/>
    <rect x="170" y="275" width="40" height="12" fill="#111827"/>
    <rect x="220" y="305" width="28" height="28" fill="#111827"/>
    <rect x="150" y="330" width="60" height="12" fill="#111827"/>
    <rect x="85" y="160" width="36" height="4" fill="#f59e0b"/>
    <rect x="259" y="160" width="36" height="4" fill="#f59e0b"/>
    <rect x="85" y="436" width="36" height="4" fill="#f59e0b"/>
    <rect x="259" y="436" width="36" height="4" fill="#f59e0b"/>
    <rect x="24" y="470" width="342" height="92" rx="18" fill="#14532d"/>
    <text x="44" y="504" fill="#86efac" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700">Validation réussie</text>
    <text x="44" y="528" fill="#bbf7d0" font-family="Segoe UI, Arial, sans-serif" font-size="12">Équipement #EQ-204 · 14:32</text>
    <text x="44" y="548" fill="#bbf7d0" font-family="Segoe UI, Arial, sans-serif" font-size="12">Opérateur : Karim B.</text>
    <rect x="24" y="590" width="342" height="54" rx="16" fill="#f59e0b"/>
    <text x="195" y="623" text-anchor="middle" fill="#111827" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="700">Nouveau scan</text>
  </svg>`;
}

function medisMenu() {
  const meals = [
    ["Couscous légumes", "450 cal · 12 DT", "#10b981"],
    ["Poulet grillé", "520 cal · 14 DT", "#0ea5e9"],
    ["Salade méditerranéenne", "280 cal · 9 DT", "#84cc16"],
  ];
  const rows = meals
    .map(
      ([title, sub, color], i) => `
    <rect x="24" y="${210 + i * 108}" width="342" height="88" rx="18" fill="#fff"/>
    <rect x="36" y="${222 + i * 108}" width="64" height="64" rx="14" fill="${color}" opacity="0.18"/>
    <circle cx="68" cy="${254 + i * 108}" r="18" fill="${color}" opacity="0.35"/>
    <text x="114" y="${246 + i * 108}" fill="#0f172a" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="600">${title}</text>
    <text x="114" y="${268 + i * 108}" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="12">${sub}</text>
    <rect x="300" y="${238 + i * 108}" width="52" height="32" rx="10" fill="#059669"/>
    <text x="326" y="${259 + i * 108}" text-anchor="middle" fill="#fff" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700">+</text>
  `,
    )
    .join("");

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="#f8fafc"/>
    ${statusBar("#059669", "#ecfdf5")}
    <text x="24" y="92" fill="#064e3b" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700">Menu du jour</text>
    <text x="24" y="118" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="13">Restaurant d'entreprise · ESPRIT</text>
    <rect x="24" y="140" width="342" height="48" rx="14" fill="#fff" stroke="#d1fae5"/>
    <text x="44" y="170" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="13">Rechercher un plat...</text>
    ${rows}
    <rect x="24" y="760" width="342" height="64" rx="22" fill="#fff" stroke="#e2e8f0"/>
    <text x="70" y="800" fill="#059669" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="700">Menu</text>
    <text x="180" y="800" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="12">Panier</text>
    <text x="280" y="800" fill="#94a3b8" font-family="Segoe UI, Arial, sans-serif" font-size="12">Profil</text>
  </svg>`;
}

function medisReservation() {
  const slots = ["11:30", "12:00", "12:30", "13:00"];
  const chips = slots
    .map(
      (slot, i) => `
    <rect x="${24 + (i % 2) * 170}" y="${250 + Math.floor(i / 2) * 58}" width="150" height="42" rx="12" fill="${i === 1 ? "#059669" : "#fff"}" stroke="${i === 1 ? "#059669" : "#e2e8f0"}"/>
    <text x="${99 + (i % 2) * 170}" y="${276 + Math.floor(i / 2) * 58}" text-anchor="middle" fill="${i === 1 ? "#fff" : "#334155"}" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600">${slot}</text>
  `,
    )
    .join("");

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="#f8fafc"/>
    ${statusBar("#059669", "#ecfdf5")}
    <text x="24" y="92" fill="#064e3b" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700">Réservation</text>
    <text x="24" y="118" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="13">Choisissez votre créneau</text>
    <rect x="24" y="148" width="342" height="72" rx="18" fill="#fff" stroke="#d1fae5"/>
    <text x="44" y="178" fill="#0f172a" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="600">Poulet grillé</text>
    <text x="44" y="200" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="12">Jeudi 10 juillet · 1 portion</text>
    <text x="24" y="240" fill="#334155" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600">Horaire</text>
    ${chips}
    <text x="24" y="390" fill="#334155" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600">Lieu de retrait</text>
    <rect x="24" y="408" width="342" height="52" rx="14" fill="#fff" stroke="#d1fae5"/>
    <text x="44" y="440" fill="#0f172a" font-family="Segoe UI, Arial, sans-serif" font-size="14">Self entreprise — Bâtiment C</text>
    <rect x="24" y="500" width="342" height="54" rx="16" fill="#059669"/>
    <text x="195" y="533" text-anchor="middle" fill="#fff" font-family="Segoe UI, Arial, sans-serif" font-size="16" font-weight="700">Confirmer la réservation</text>
    <rect x="24" y="580" width="342" height="88" rx="18" fill="#ecfdf5"/>
    <text x="44" y="612" fill="#047857" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="700">Paiement badge employé</text>
    <text x="44" y="636" fill="#059669" font-family="Segoe UI, Arial, sans-serif" font-size="12">Débit automatique sur compte cantine</text>
  </svg>`;
}

function medisOrders() {
  const orders = [
    ["Poulet grillé", "12:00 · Confirmée", "#059669"],
    ["Salade méditerranéenne", "Hier · Récupérée", "#64748b"],
    ["Couscous légumes", "Lun · Récupérée", "#64748b"],
  ];
  const rows = orders
    .map(
      ([title, sub, color], i) => `
    <rect x="24" y="${170 + i * 92}" width="342" height="72" rx="16" fill="#fff" stroke="#e2e8f0"/>
    <rect x="40" y="${188 + i * 92}" width="10" height="36" rx="5" fill="${color}"/>
    <text x="62" y="${210 + i * 92}" fill="#0f172a" font-family="Segoe UI, Arial, sans-serif" font-size="15" font-weight="600">${title}</text>
    <text x="62" y="${230 + i * 92}" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="12">${sub}</text>
  `,
    )
    .join("");

  return `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="#f8fafc"/>
    ${statusBar("#059669", "#ecfdf5")}
    <text x="24" y="92" fill="#064e3b" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="700">Mes commandes</text>
    <text x="24" y="118" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="13">Historique et statut</text>
    ${rows}
    <rect x="24" y="470" width="342" height="120" rx="18" fill="#fff" stroke="#d1fae5"/>
    <text x="44" y="504" fill="#334155" font-family="Segoe UI, Arial, sans-serif" font-size="13" font-weight="600">Statistiques admin</text>
    <text x="44" y="536" fill="#059669" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="700">128</text>
    <text x="44" y="558" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="12">repas réservés aujourd'hui</text>
    <text x="220" y="536" fill="#0ea5e9" font-family="Segoe UI, Arial, sans-serif" font-size="28" font-weight="700">96%</text>
    <text x="220" y="558" fill="#64748b" font-family="Segoe UI, Arial, sans-serif" font-size="12">taux de satisfaction</text>
    <rect x="24" y="620" width="342" height="54" rx="16" fill="#0f172a"/>
    <text x="195" y="653" text-anchor="middle" fill="#fff" font-family="Segoe UI, Arial, sans-serif" font-size="14" font-weight="600">Tableau de bord admin</text>
  </svg>`;
}

const safeScreens = await Promise.all([
  svgToPng(safeSiteLogin(), W, H),
  svgToPng(safeSiteDashboard(), W, H),
  svgToPng(safeSiteQr(), W, H),
]);

const medisScreens = await Promise.all([
  svgToPng(medisMenu(), W, H),
  svgToPng(medisReservation(), W, H),
  svgToPng(medisOrders(), W, H),
]);

await buildCollage(safeScreens, "public/projects/safesiteconnect.png");
await buildCollage(medisScreens, "public/projects/medisapp.png");
