# Marcador de lista

Lista sem ordem relevante, com marcador circular teal e texto em cinza escuro.

O consumidor fornece uma lista de frases curtas; a partir de quatro itens, o componente distribui automaticamente em duas colunas.

Quando usar: para listas de características, regras ou itens soltos sem sequência importante. Para uma sequência com ordem (etapas, ranking), use a Lista numerada.

Faça: use o marcador circular em `teal-conexus`; escreva o texto em `corpo`; marque `destaque: true` num item para trocar o marcador circular pelo quadrado (`radius-none`) e destacá-lo dentro da mesma lista.

Não faça: não misture marcador circular e quadrado sem que o quadrado esteja de fato destacando algo; não use mais de duas colunas.

## Uso

```tsx
import { MarcadorLista } from "@/components/MarcadorLista";

<MarcadorLista
  items={[
    "Marcador teal, texto cinza escuro",
    "Duas colunas quando passa de quatro itens",
    { texto: "Variante com quadrado, para destaques", destaque: true },
  ]}
/>
```
