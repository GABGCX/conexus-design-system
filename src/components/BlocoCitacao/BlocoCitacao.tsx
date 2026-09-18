export type BlocoCitacaoProps = {
  /** Frase curta de propósito, promessa ou depoimento. Nunca um parágrafo longo. */
  frase: string;
};

/** Bloco de fundo claro com filete teal de 3px no topo, para uma única frase de impacto. */
export function BlocoCitacao({ frase }: BlocoCitacaoProps) {
  return (
    <div className="max-w-[420px] border-t-[3px] border-teal-conexus bg-fundo-citacao px-[26px] py-[22px]">
      <p className="m-0 font-display text-[19px] font-semibold leading-[1.3] text-navy">{frase}</p>
    </div>
  );
}
