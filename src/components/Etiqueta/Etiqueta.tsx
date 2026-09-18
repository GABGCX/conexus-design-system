import type { ReactNode } from "react";

export type EtiquetaProps = {
  children: ReactNode;
  /** "destaque" preenche em navy: no máximo uma por grupo. */
  variante?: "padrao" | "destaque";
};

/** Chip de contorno neutro para classificar conteúdo; canto sempre reto. */
export function Etiqueta({ children, variante = "padrao" }: EtiquetaProps) {
  const destaque = variante === "destaque";
  return (
    <div
      className={`rounded-none border px-[14px] py-[8px] font-body text-[13px] ${
        destaque
          ? "border-navy bg-navy text-branco"
          : "border-borda-etiqueta text-corpo"
      }`}
    >
      {children}
    </div>
  );
}
