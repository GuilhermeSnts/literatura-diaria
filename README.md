# Literatura Diária

- **Descrição:** Projeto Next.js simples para planejamento de leitura.

**Requisitos**

- **Node:**: Recomendado Node.js 18+ e `npm`.

**Instalação**

- **Passos:**

```bash
npm install
```

**Scripts úteis**

- **dev:** `npm run dev` — inicia o servidor Next.js em desenvolvimento.
- **lint:** `npm run lint` — formata o projeto com Prettier.

**Configuração e tema**

- **Tailwind:** O projeto usa Tailwind CSS (configurado em `tailwind.config.js` e `postcss.config.js`).

**Estrutura principal**

- **`pages/`**: Páginas Next.js (`index.tsx`, `planner/index.tsx`, `_app.tsx`).
- **`components/`**: Componentes React (ex.: `PlannerOptions`).
- **`styles/globals.css`**: CSS global com diretivas Tailwind.
- **`tailwind.config.js`**, **`postcss.config.js`**: Configurações do Tailwind/PostCSS.

**Observações**

- Se houver erro relacionado a `tailwindcss` ao iniciar, execute `npm install` e reinicie o servidor (`npm run dev`).
- Para desenvolvimento local, abra `http://localhost:3000` após iniciar o servidor.

Contribuições e melhorias são bem-vindas — abra uma issue ou PR com sugestões.
