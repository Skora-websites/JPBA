import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-hosted deploy: emit a minimal server bundle (server.js) that runs
  // with just `node server.js` — see README "Deploying to your own server".
  // Skipped on Vercel (their build doesn't support standalone output).
  output: process.env.VERCEL ? undefined : "standalone",
  // better-sqlite3 is a native module — keep it external to the client bundle
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
