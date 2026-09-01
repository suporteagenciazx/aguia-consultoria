# Deploy Águia Consultoria — VPS (Contabo + Cloudflare)

## O que subir na VPS

Envie **todo o conteúdo desta pasta** (`deploy-vps/`) para:

```
/var/www/aguia-consultoria/
```

Estrutura esperada na VPS:

```
/var/www/aguia-consultoria/
├── server/          ← código do servidor Node
├── public/          ← assets estáticos (imagens, CSS, JS)
├── nitro.json
├── package.json
├── ecosystem.config.cjs
└── nginx-aguia.conf
```

**Não** suba `src/`, `node_modules/` do projeto original nem código-fonte.

---

## 1. Requisitos na VPS

- Ubuntu/Debian
- Node.js 20+ (`node -v`)
- Nginx
- PM2 (opcional, recomendado)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt update
sudo apt install -y nodejs nginx
sudo npm install -g pm2
```

---

## 2. Enviar arquivos

Via SFTP/SCP, envie esta pasta para `/var/www/aguia-consultoria/`.

Exemplo com SCP (no seu PC):

```bash
scp -r deploy-vps/* root@IP_DA_VPS:/var/www/aguia-consultoria/
```

---

## 3. Iniciar o app

```bash
cd /var/www/aguia-consultoria
node server/index.mjs
```

Teste: `curl http://127.0.0.1:3000` — deve retornar HTML.

Para manter rodando com PM2:

```bash
cd /var/www/aguia-consultoria
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

---

## 4. Configurar Nginx

```bash
sudo cp /var/www/aguia-consultoria/nginx-aguia.conf /etc/nginx/sites-available/aguia
sudo nano /etc/nginx/sites-available/aguia   # troque seudominio.com.br
sudo ln -s /etc/nginx/sites-available/aguia /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 5. Cloudflare (DNS)

| Tipo | Nome | Conteúdo      | Proxy   |
|------|------|---------------|---------|
| A    | @    | IP da VPS     | Laranja |
| A    | www  | IP da VPS     | Laranja |

SSL/TLS → modo **Full** ou **Full (strict)**.

---

## 6. Firewall

```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

---

## Atualizar o site no futuro

1. Rode `npm run build` no seu PC (na pasta do projeto)
2. Copie o conteúdo de `.output/` para esta pasta de deploy
3. Reenvie para a VPS
4. `pm2 restart aguia-consultoria`
