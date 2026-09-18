# Bloco navy de declaração

Bloco de fundo navy com uma frase de destaque em branco e um rótulo pequeno abaixo: o ponto alto da página.

O consumidor fornece uma frase curta e de impacto, e opcionalmente um rótulo (o nome da empresa ou da seção).

Quando usar: no máximo um por peça. É reservado para a afirmação mais importante da página, como um resultado, um prazo ou uma promessa cumprível.

Faça: fundo `navy`; frase em `branco`, próxima do estilo `subtitle`; rótulo abaixo em caixa alta, cor `rotulo-sobre-navy`, letter-spacing 0.2em.

Não faça: não use mais de um Bloco navy de declaração na mesma peça; não escreva mais de uma frase dentro do bloco; não troque o fundo por outra cor.

## Uso

```tsx
import { BlocoNavyDeclaracao } from "@/components/BlocoNavyDeclaracao";

<BlocoNavyDeclaracao frase="Proposta em até 48 horas." rotulo="Conexus" />
```
