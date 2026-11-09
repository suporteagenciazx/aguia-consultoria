/**
 * PM2 — deploy na VPS (sem Docker).
 * Pasta aaPanel: site.consultoriaaguia.com
 * Domínio: consultoriaaguia.com
 *
 * Uso:
 *   npm run build
 *   pm2 start ecosystem.config.cjs
 *   pm2 save
 */
module.exports = {
  apps: [
    {
      name: "aguia-consultoria",
      script: "server/index.mjs",
      cwd: "/www/wwwroot/site.consultoriaaguia.com/.output",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NITRO_HOST: "127.0.0.1",
      },
    },
  ],
};
