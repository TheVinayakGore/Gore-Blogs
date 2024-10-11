/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Add this line to allow Sanity's CDN
    },
};

export default nextConfig;
