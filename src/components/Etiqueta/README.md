# Etiquetas

Chip de contorno neutro para classificar conteúdo (um cargo, uma categoria); uma variante sólida em navy para a etiqueta que deve se destacar das demais.

O consumidor fornece o texto da etiqueta: uma palavra ou expressão curta, sem verbo.

Quando usar: para marcar categoria, público ou tipo de conteúdo ao lado de um título ou dentro de um cartão. No máximo uma etiqueta em destaque por grupo.

Faça: contorno padrão em `borda-etiqueta`, texto em `corpo`, canto reto (`radius-none`); para a etiqueta em destaque, use `variante="destaque"` (preenche com `navy`, texto `branco`).

Não faça: não arredonde o canto da etiqueta; não use mais de uma etiqueta em destaque no mesmo grupo; não escreva uma frase completa dentro da etiqueta.

## Uso

```tsx
import { Etiqueta } from "@/components/Etiqueta";

<div className="flex flex-wrap gap-[10px]">
  <Etiqueta>Gerente de Projetos</Etiqueta>
  <Etiqueta>Analista de Negócios</Etiqueta>
  <Etiqueta variante="destaque">Etiqueta em destaque</Etiqueta>
</div>
```
