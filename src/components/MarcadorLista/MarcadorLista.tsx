export type MarcadorListaItem = {
  texto: string;
  /** Marcador quadrado em vez de circular, para destacar este item dentro da mesma lista. */
  destaque?: boolean;
};

export type MarcadorListaProps = {
  items: (string | MarcadorListaItem)[];
};

/** Lista sem ordem relevante, com marcador circular teal e texto em cinza escuro. */
export function MarcadorLista({ items }: MarcadorListaProps) {
  const normalizados = items.map((item) => (typeof item === "string" ? { texto: item } : item));
  const duasColunas = normalizados.length > 4;

  return (
    <ul className={`m-0 list-none p-0 ${duasColunas ? "grid grid-cols-2 gap-x-8" : ""}`}>
      {normalizados.map((item, index) => (
        <li
          key={`${item.texto}-${index}`}
          className="flex items-center gap-3 py-[7px] text-[14.5px] text-corpo"
        >
          <span
            className={`flex-none bg-teal-conexus ${
              item.destaque ? "h-2 w-2 rounded-none" : "h-[7px] w-[7px] rounded-full"
            }`}
          />
          {item.texto}
        </li>
      ))}
    </ul>
  );
}
