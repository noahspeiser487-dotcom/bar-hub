import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "bar-hub";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
};

export default nextConfig;
