import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Garante que o SDK do Azure não seja incluído no bundle do client.
  serverExternalPackages: ["@azure/ai-projects", "@azure/ai-agents", "@azure/identity", "@azure/core-auth"],

  // Suprime avisos de pacotes experimentais do Azure SDK em desenvolvimento
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  },
};

export default nextConfig;
