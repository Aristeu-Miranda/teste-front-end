## Vitrine de Produtos — Teste Econverse (Front-End)

Este repositório contém a implementação da vitrine de produtos solicitada no teste técnico de Front-End da Econverse.

## Tecnologias utilizadas
- **React 19** + **TypeScript 5**
- **Vite 7** (dev server, build e preview)
- **Sass (SCSS)** para estilização com variáveis e mixins
- **ESLint** para padronização do código
- **vite-plugin-svgr** (suporte a SVG como componente, quando necessário)

---

## Requisitos
- Node.js 18+ (recomendado LTS atual)
- npm 9+ (ou outro gerenciador compatível)

---

## Como rodar (desenvolvimento)
1. Instale as dependências:
```bash
npm install
```
2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
3. Acesse a aplicação no navegador (porta padrão do Vite):
```
http://localhost:5173
```

Observação: o proxy de desenvolvimento está configurado em `vite.config.ts` para o caminho `/econverse`, evitando problemas de CORS.

---

## Build de produção e preview
- Gerar build de produção:
```bash
npm run build
```
- Visualizar a build localmente:
```bash
npm run preview
```
O build estático será emitido em `dist/` e pode ser hospedado em qualquer serviço de arquivos estáticos (Netlify, Vercel, GitHub Pages, etc.).

---

## Qualidade de código
- Rodar o linter:
```bash
npm run lint
```

---

## Estrutura do projeto (resumo)
```
.
├── index.html              # Documento HTML base
├── public/                 # Arquivos estáticos públicos
├── src/
│   ├── assets/             # Ícones e imagens (SVGs)
│   ├── components/         # Componentes reutilizáveis (UI e seções)
│   │   ├── Banner/
│   │   ├── Brands/
│   │   ├── Button/
│   │   ├── Carousel/
│   │   ├── Category/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── InformationItem/
│   │   ├── Input/
│   │   ├── Modal/
│   │   ├── Partners/
│   │   ├── ProductCard/
│   │   └── Products/
│   ├── services/           # Acesso a dados e hooks (vitrine)
│   │   ├── showCase.ts     # Fetch de produtos (proxy em dev, URL direta em prod)
│   │   ├── showCase.hook.ts# Hook `useShowcaseProducts`
│   │   └── ...types.ts
│   ├── styles/             # Variáveis e mixins SCSS
│   ├── index.scss          # Estilos globais
│   ├── App.tsx             # Composição das seções principais
│   └── main.tsx            # Ponto de entrada React
├── vite.config.ts          # Configurações: React, SVGR, alias `@`, proxy /econverse
├── eslint.config.js        # Regras de lint
├── package.json            # Scripts e dependências
└── tsconfig*.json          # Configurações TypeScript
```

---

## Como funciona
- O módulo `src/services/showCase.ts` define duas URLs:
  - `PROXY_PATH` (`/econverse/...`) usado em desenvolvimento.
  - `DIRECT_URL` (URL pública) usada em produção.
- A escolha é automática via `import.meta.env.DEV`.
- O proxy está configurado em `vite.config.ts`, reescrevendo `/econverse` para `https://app.econverse.com.br`.
- O hook `useShowcaseProducts` faz o fetch e expõe estados de `isLoading` e `error`.
- A vitrine é renderizada pelos componentes `Products` → `Carousel` → `ProductCard`.
- Ao clicar em “Comprar”, abre-se o `Modal` com informações do item. Em paralelo, o ID do produto é refletido na URL via `searchParams` para facilitar rastreio/compartilhamento do estado.

---

## Decisões técnicas e boas práticas
- **Sem .env**: nenhuma variável de ambiente é necessária para rodar o projeto.
- **Arquitetura por componentes**: cada componente possui seu `.component.tsx`, `.scss`, `types` e `index` para encapsular responsabilidade.
- **Estilos com SCSS**: variáveis globais em `src/styles/_variables.scss` e organização por componente, facilitando manutenção e tema.
- **Acessibilidade básica**: uso de `aria-label`, roles e foco na semântica em elementos interativos.
- **Skeletons de carregamento**: `ProductCard` e `Carousel` exibem placeholders enquanto os dados são carregados.
- **Formatação monetária**: `Intl.NumberFormat('pt-BR', { currency: 'BRL' })` para exibição consistente de preços.
- **Alias de importação `@`**: mapeado para `src/` em `vite.config.ts` para imports curtos e legíveis.
- **SVGs**: carregados como URL em `img` e com suporte a uso como componente React via `vite-plugin-svgr` se necessário (`.svg?react`).
- **Sem bibliotecas de UI**: estilos e componentes implementados do zero, conforme solicitado.

---

## Customização
- **Endpoint de dados**: ajuste `PROXY_PATH`/`DIRECT_URL` em `src/services/showCase.ts` se o endpoint mudar.
- **Proxy de desenvolvimento**: edite `server.proxy` em `vite.config.ts` para adequar caminhos/domínios.
- **Estilos/tema**: altere cores e breakpoints em `src/styles/_variables.scss`.

---

## Deploy
O artefato em `dist/` é estático. Hospede em qualquer CDN/serviço de arquivos estáticos. Em produção as requisições usam a URL pública direta, portanto não é necessário configurar proxy no servidor.

---

## Scripts disponíveis
- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera o build de produção.
- `npm run preview`: serve a build para validação local.
- `npm run lint`: executa o ESLint.

> Observação: não há testes automatizados neste projeto no momento.

---

## Agradecimento
Muito obrigado pela oportunidade de participar do processo seletivo da Econverse! Foi um prazer desenvolver este desafio.
