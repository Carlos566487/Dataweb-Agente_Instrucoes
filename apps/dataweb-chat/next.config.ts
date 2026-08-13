import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Garante que o SDK do Azure não seja incluído no bundle do client.
  // Em Next.js 15, serverExternalPackages é top-level (não mais em experimental).
  serverExternalPackages: ["@azure/ai-projects", "@azure/core-auth"],

  // Suprime avisos de pacotes experimentais do Azure SDK em desenvolvimento
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  },
};

export default nextConfig;
