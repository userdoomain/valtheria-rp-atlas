import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS ? "/valtheria-rp-atlas" : "",
};

export default nextConfig;
