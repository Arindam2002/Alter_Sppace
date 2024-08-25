/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'altersppace.com',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'altersppace-53d6a.web.app',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

module.exports = nextConfig;
