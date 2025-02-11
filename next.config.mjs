/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io", // Replace with your actual image domain
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;


