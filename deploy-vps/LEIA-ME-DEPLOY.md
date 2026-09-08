# Deploy VPS (sem Docker) — legado

Preferência atual: **Docker** → veja [`DOCKER.md`](../DOCKER.md) na raiz do repositório.

## Opção A — Git + build + PM2 (recomendado sem Docker)

Na VPS, com o repositório clonado:

```bash
cd /www/wwwroot/aguiaempresarial.com   # ajuste o caminho
git pull
npm ci
npm run build
pm2 start ecosystem.config.cjs         # arquivo na raiz do repo
pm2 save
```

Ajuste `cwd` em `ecosystem.config.cjs` se o projeto não estiver em `/www/wwwroot/aguiaempresarial.com`.

Reverse proxy (aaPanel ou Nginx) → `http://127.0.0.1:3000`.

Atualizar:

```bash
git pull && npm ci && npm run build && pm2 restart aguia-consultoria
```

## Opção B — Pasta `.output` pré-buildada

1. No PC: `npm run build`
2. Copie o conteúdo de `.output/` para a VPS (server + public)
3. `node server/index.mjs` ou PM2 com `cwd` apontando para essa pasta

Esta pasta `deploy-vps/` é um pacote de referência; o fluxo Git + build ou Docker é mais simples para atualizações.

## Nginx (exemplo)

```nginx
server {
    listen 80;
    server_name aguiaempresarial.com www.aguiaempresarial.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Arquivo de exemplo: `nginx-aguia.conf`.
