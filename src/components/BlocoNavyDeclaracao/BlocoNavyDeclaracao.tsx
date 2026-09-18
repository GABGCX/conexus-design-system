export type BlocoNavyDeclaracaoProps = {
  /** Frase curta e de impacto: a afirmação mais importante da página. */
  frase: string;
  /** Rótulo pequeno abaixo da frase, em caixa alta. */
  rotulo?: string;
};

/** Bloco de fundo navy com uma frase de destaque em branco: o ponto alto da página. Um por peça, no máximo. */
export function BlocoNavyDeclaracao({ frase, rotulo = "Conexus" }: BlocoNavyDeclaracaoProps) {
  return (
    <div className="max-w-[340px] bg-navy px-[26px] py-[22px]">
      <p className="m-0 mb-[6px] font-display text-[19px] font-semibold text-branco">{frase}</p>
      <div className="font-body text-[10.5px] font-normal uppercase tracking-[0.2em] text-rotulo-sobre-navy">
        {rotulo}
      </div>
    </div>
  );
}
