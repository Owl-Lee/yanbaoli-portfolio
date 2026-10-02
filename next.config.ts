import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves the generated HTML and assets without a server.
  output: "export",
};

export default nextConfig;
