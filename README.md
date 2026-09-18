# Conexus Design System

Biblioteca de componentes React que implementa a identidade visual da Conexus. Os tokens de marca (cor, tipografia, espaçamento, raio) e as sete peças que compõem qualquer material — régua de abertura, kicker e título, lista numerada, marcador de lista, bloco de citação, bloco navy de declaração e etiquetas — vêm do manual de marca e estão documentados em [`docs/BRAND.md`](docs/BRAND.md).

## Instalação e uso

```bash
npm install
npm run dev
```

O `npm run dev` sobe uma página de showcase (`src/App.tsx`) com todos os componentes agrupados por Estrutura, Conteúdo e Destaque.

Importe os componentes a partir de `src/index.ts`:

```tsx
import { KickerTitulo, ListaNumerada, Etiqueta } from "conexus-design-system";

<KickerTitulo kicker="Nossa atuação" title="Da análise à solução" />;
```

## Estrutura do projeto

```
src/
  tokens/         tokens.json (fonte) + index.ts (tokens tipados: cor, fonte, espaçamento, raio, layout)
  components/     um componente por peça, cada um com README.md documentando quando usar / faça / não faça
  assets/logos/   os dois SVGs oficiais da assinatura Conexus
  App.tsx         showcase de todos os componentes
docs/
  BRAND.md        guia de marca completo (tom de voz, cor, tipografia, grade, logotipo)
```

Os tokens de cor, tipografia, espaçamento e raio estão mapeados em [`tailwind.config.ts`](tailwind.config.ts) a partir de [`src/tokens/tokens.json`](src/tokens/tokens.json), então classes como `bg-navy`, `text-teal-conexus`, `font-display`, `p-ds-2` e `max-w-texto` seguem exatamente os valores da marca.

## Scripts

- `npm run dev`: showcase em modo desenvolvimento.
- `npm run build`: checagem de tipos + build de produção do showcase.
- `npm run preview`: serve o build de produção localmente.

## Regras que o código não aplica sozinho

Algumas regras da marca são de composição, não de estilo, e cabe a quem monta a página respeitá-las: no máximo um Bloco navy de declaração e um Bloco de citação por peça, no máximo uma Etiqueta em destaque por grupo, e nunca duas versões de logo (positiva/negativa) na mesma peça. Veja o "Checklist antes de publicar" em `docs/BRAND.md`.
