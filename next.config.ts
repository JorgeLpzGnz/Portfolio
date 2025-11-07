/** @type {import('next').NextConfig} */
const nextConfig = {
  // Habilitar export estático
  output: 'export',
  
  // Deshabilitar optimización de imágenes
  images: {
    unoptimized: true,
  },
  
  // IMPORTANTE: Configurar según dónde vas a subir el sitio
  
  // Si subes a la raíz (ej: tudominio.com/)
  // Deja estas líneas comentadas o bórralas
  
  // Si subes a un subdirectorio (ej: tudominio.com/portfolio/)
  // Descomenta y ajusta estas líneas:
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
  
  // Agregar trailing slash ayuda con algunos servidores
  trailingSlash: true,
  
  // Optimizaciones
  swcMinify: true,
  
  // Deshabilitar validación estricta de ESLint en build (opcional)
  eslint: {
    ignoreDuringBuilds: false,
  },
  
  // Configuración de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig