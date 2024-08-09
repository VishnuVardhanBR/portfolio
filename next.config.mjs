/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: 'vishnuvardhanbr.com'
        }],
        unoptimized: true
    },
};

export default nextConfig;
