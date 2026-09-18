export type ReguaAberturaProps = {
  /** Fundo sobre o qual a régua será aplicada. Define a cor: teal-conexus em claro, teal-claro em navy. */
  fundo?: "claro" | "navy";
};

/** Barra de 52 × 3px que abre toda capa e página de fechamento, acima do kicker. */
export function ReguaAbertura({ fundo = "claro" }: ReguaAberturaProps) {
  return (
    <div
      className={`h-[3px] w-[52px] ${fundo === "navy" ? "bg-teal-claro" : "bg-teal-conexus"}`}
    />
  );
}
