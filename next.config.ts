import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // search を省略すると、クエリ文字列の有無にかかわらず pathname にマッチする
    localPatterns: [
      { pathname: "/images/**" },
    ],
  },
};

export default nextConfig;
