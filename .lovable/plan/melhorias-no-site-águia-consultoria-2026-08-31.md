# Melhorias no site Águia Consultoria

Baseado no site de referência (magnusassessoria.com), mantendo 100% a identidade visual atual (grafite/cinza, Playfair Display + Montserrat, botões com inversão de cor no hover).

## 1. Arquivo único de configuração

Criar `src/config/site.ts` com as variáveis que você pode editar direto no código:

- `whatsapp` — número informado: `+55 511 94129-0842` (link `https://wa.me/55511941290842`)
- `whatsappMessage` — mensagem padrão pré-preenchida
- `economistaChefe` — nome do economista chefe (padrão: Afonso Reis) + cargo/registro

Todos os botões de WhatsApp e a seção de equipe leem desse arquivo. Sem página de configuração e sem banco de dados.

## 2. Primeira seção com 3 pessoas corporativas

Adicionar à hero três retratos corporativos (2 mulheres, 1 homem), sérios e de alta qualidade, usando fotos gratuitas de banco público (Unsplash/Pexels, licença livre) baixadas para `src/assets/` — sem geração por IA. Apresentação em composição sobreposta discreta, em preto e branco/monocromático para casar com a paleta, com selo de credibilidade ao lado.

## 3. WhatsApp

- Botão flutuante fixo no canto inferior direito (aparece em todas as páginas), com animação de pulso suave e tooltip.
- Faixa retangular de WhatsApp no rodapé (bloco largo com CTA).
- Todos os botões "Falar com especialista" (header, hero, mobile, contato) passam a abrir o WhatsApp.

## 4. Seção de Equipe

Nova seção "Equipe com experiência prática e visão de negócio": cards de especialistas com foto, nome, cargo, especialidade e registro (CORECON), no estilo da referência mas com a estética do projeto (moldura fina, monocromático, hover com elevação e zoom na foto). O primeiro card é o Economista Chefe vindo do arquivo de config.

## 5. Seção de Localizações

Três unidades, no formato de cards com mapa/ícone:

- São Paulo — Av. Paulista, 1000 — 8º andar · São Paulo/SP · 01310-100 (endereço atual do projeto)
- Santa Catarina — Rua Angelo Dias, 207, Sala 22 · Centro — Blumenau/SC · CEP 89010-020
- Rio de Janeiro — Av. Saquarema, 567 · Centro — Saquarema/RJ

## 6. Página de Blog

Nova rota `/blog` (listagem) e `/blog/$slug` (artigo), com 6 artigos fictícios sobre empresas e gestão (crédito empresarial, governança, planejamento financeiro, controladoria, expansão, indicadores). Cada artigo com imagem de capa, categoria, data, tempo de leitura e conteúdo completo. Link "Blog" adicionado ao menu (desktop e mobile) e ao rodapé.

## 7. Ajustes no rodapé

- Remover os ícones de LinkedIn, Instagram e YouTube.
- Remover o item "Atendimento corporativo" da coluna Contato.
- Telefone do rodapé passa a usar o número do config.

## Detalhes técnicos

- Novos arquivos: `src/config/site.ts`, `src/components/WhatsAppFloat.tsx`, `src/components/SiteHeader.tsx` e `src/components/SiteFooter.tsx` (extraídos do index para reuso no blog), `src/data/posts.ts`, `src/routes/blog.index.tsx`, `src/routes/blog.$slug.tsx`.
- Cada rota nova recebe `head()` própria com título, descrição e og tags.
- Imagens de pessoas baixadas de fontes livres para `src/assets/` e importadas como módulos (sem hotlink).
- Animações reutilizam o sistema `data-reveal`, `card-hover`, `media-zoom` já existente.
