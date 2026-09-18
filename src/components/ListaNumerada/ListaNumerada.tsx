export type ListaNumeradaItem = {
  /** Texto livre, como "01" ou "02". */
  numero: string;
  /** Título curto do item. */
  titulo: string;
};

export type ListaNumeradaProps = {
  items: ListaNumeradaItem[];
};

/** Lista de itens sequenciais em que o número, e não um marcador, carrega a ordem. */
export function ListaNumerada({ items }: ListaNumeradaProps) {
  return (
    <div>
      {items.map((item, index) => (
        <div
          key={`${item.numero}-${index}`}
          className={`flex items-baseline gap-[18px] py-[14px] ${
            index === 0 ? "" : "border-t border-regua"
          }`}
        >
          <div className="w-[34px] font-display text-[26px] font-light text-numero-lista">
            {item.numero}
          </div>
          <div className="font-display text-[16px] font-semibold text-texto-forte">
            {item.titulo}
          </div>
        </div>
      ))}
    </div>
  );
}
