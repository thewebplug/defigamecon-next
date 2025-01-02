/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'default',
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig;

