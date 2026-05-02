import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      // Allow /images/* with no query string (SVGs, unversioned files)
      { pathname: "/images/**", search: "" },
      // Allow /images/* with ?v= version param for cache busting
      { pathname: "/images/**", search: "v=*" },
    ],
  },
};

export default nextConfig;
