# Deploy com Docker — Águia Consultoria

Site React (TanStack Start) com build Nitro `node-server`. A imagem sobe o app na porta **3000**.

## Requisitos

- Docker 24+
- Docker Compose v2 (`docker compose`)
- Imagem baseada em **Node 22** (Alpine)

## Subir (produção)

Na raiz do projeto:

```bash
docker compose up -d --build
```

Site local: **http://localhost:3000**

Parar:

```bash
docker compose down
```

## Porta customizada

Exemplo na porta 8080 do host:

```bash
PORT=8080 docker compose up -d --build
```

Ou crie um `.env` na raiz:

```env
PORT=8080
```

## Comandos úteis

| Ação | Comando |
|------|---------|
| Build da imagem | `docker compose build` |
| Subir em background | `docker compose up -d` |
| Logs | `docker compose logs -f web` |
| Status | `docker compose ps` |
| Reiniciar | `docker compose restart web` |
| Rebuild forçado | `docker compose up -d --build --force-recreate` |

## VPS + Nginx / aaPanel

1. Clone o repositório na VPS.
2. `docker compose up -d --build`
3. Reverse proxy para `http://127.0.0.1:3000` (aaPanel → Reverse proxy, ou Nginx).
4. DNS Cloudflare → IP da VPS; SSL **Full** / **Full (strict)**.

Exemplo Nginx:

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

## Atualizar o site

```bash
git pull
docker compose up -d --build
```

Se usar Cloudflare com proxy laranja, faça **Purge Cache** após mudanças em imagens/CSS/JS.

## Só Docker (sem Compose)

```bash
docker build -t aguia-consultoria .
docker run -d --name aguia-consultoria -p 3000:3000 --restart unless-stopped aguia-consultoria
```

## Estrutura

| Arquivo | Função |
|---------|--------|
| `Dockerfile` | Build multi-stage → runtime Node 22 |
| `docker-compose.yml` | Orquestra o serviço `web` |
| `.dockerignore` | Acelera o build (ignora `node_modules`, `.output`, etc.) |
| `ecosystem.config.cjs` | Alternativa **sem Docker** (PM2 na VPS) |

## Alternativa sem Docker (PM2)

```bash
npm ci
npm run build
pm2 start ecosystem.config.cjs
pm2 save
```

Ajuste o `cwd` em `ecosystem.config.cjs` para o caminho real do `.output` na VPS.
