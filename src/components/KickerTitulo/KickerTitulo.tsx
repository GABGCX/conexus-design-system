import { ReguaAbertura } from "../ReguaAbertura";

export type KickerTituloProps = {
  /** Rótulo curto em caixa alta, sem pontuação final. Não digite em maiúsculas: o componente aplica uppercase. */
  kicker: string;
  /** Título em caixa de frase, nunca em caixa alta. */
  title: string;
  /** Cor do título sobre fundo claro. */
  corTitulo?: "navy" | "texto-forte";
};

/** Trinca fixa que abre toda seção: régua, kicker e título. */
export function KickerTitulo({ kicker, title, corTitulo = "navy" }: KickerTituloProps) {
  return (
    <div>
      <div className="mb-[18px]">
        <ReguaAbertura fundo="claro" />
      </div>
      <div className="mb-2 font-body text-[10.5px] font-normal uppercase tracking-[0.2em] text-teal-conexus">
        {kicker}
      </div>
      <p
        className={`m-0 font-display text-[33px] font-semibold leading-[1.15] tracking-[-0.018em] ${
          corTitulo === "navy" ? "text-navy" : "text-texto-forte"
        }`}
      >
        {title}
      </p>
    </div>
  );
}
