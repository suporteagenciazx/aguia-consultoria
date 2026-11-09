/**
 * PM2 — uso legado com pasta deploy-vps/.
 * Preferir ecosystem.config.cjs na raiz do repositório (após npm run build).
 */
module.exports = {
  apps: [
    {
      name: "aguia-consultoria",
      script: "server/index.mjs",
      cwd: "/www/wwwroot/consultoriaaguia.com/.output",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NITRO_HOST: "127.0.0.1",
      },
    },
  ],
};
