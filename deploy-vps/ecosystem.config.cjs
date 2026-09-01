module.exports = {
  apps: [
    {
      name: "aguia-consultoria",
      script: "server/index.mjs",
      cwd: "/var/www/aguia-consultoria",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NITRO_HOST: "127.0.0.1",
      },
    },
  ],
};
