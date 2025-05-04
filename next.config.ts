import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,

    experimental: {
        optimizePackageImports: ["@chakra-ui/react", "lucide-react"],
        typedRoutes: true,
    },
};

export default nextConfig;
