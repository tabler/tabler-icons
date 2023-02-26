/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack(config, options) {
    config.resolve = {
      ...config.resolve,
      fallback: {
        'fs': false,
        'path': false,
        'os': false,
        child_process: false
      }
    }

    return config
  }
}

export default nextConfig
