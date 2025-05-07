import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: [
            "@chakra-ui/react",
            "lucide-react",
            "@reduxjs/toolkit",
            "react-redux",
            "@emotion/react",
            "valibot",
        ],
        typedRoutes: true,
    },
};

export default nextConfig;
