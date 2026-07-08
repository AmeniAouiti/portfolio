import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Failed to login. Incorrect credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text flex items-center justify-center px-6 transition-colors duration-300">
      <div className="max-w-md w-full">
        <div className="uppercase tracking-[3px] text-xs mb-4 text-primary text-center">
          SECURE ACCESS
        </div>
        <h2 className="text-4xl font-semibold tracking-tighter mb-8 text-center text-text">
          Admin Login
        </h2>

        <form
          onSubmit={handleLogin}
          className="glass p-8 rounded-3xl space-y-6"
        >
          <div>
            <label className="block text-sm text-text/60 mb-2 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-card px-5 py-3 rounded-2xl text-lg focus:outline-none border border-border focus:border-primary text-text placeholder:text-text/30 transition-all font-medium"
            />
          </div>
          <div>
            <label className="block text-sm text-text/60 mb-2 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-card px-5 py-3 rounded-2xl text-lg focus:outline-none border border-border focus:border-primary text-text placeholder:text-text/30 transition-all font-medium"
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 mt-4 font-bold tracking-tight rounded-2xl bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 disabled:opacity-70 transition-all"
          >
            {loading ? "AUTHENTICATING..." : "LOGIN"}
          </motion.button>

          <div className="text-center mt-4">
            <button
              type="button"
              className="text-text/40 text-sm hover:text-text transition-colors duration-300 font-medium"
              onClick={() => navigate("/")}
            >
              &larr; Back to Portfolio
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;
