import raw from "./tokens.json";

export type ColorToken = {
  name: string;
  value: { light: string };
  usage: string;
};

const tokens = raw as {
  name: string;
  version: number;
  color: { themes: { id: string; name: string }[]; tokens: ColorToken[] };
  type: {
    families: { display: string; body: string };
    groups: {
      name: string;
      family: "display" | "body";
      styles: {
        name: string;
        fontSize: string;
        lineHeight: number;
        fontWeight: number;
        letterSpacing?: string;
        fontStyle?: string;
        usage: string;
      }[];
    }[];
  };
  spacing: { tokens: { name: string; value: string; usage: string }[] };
  radius: { tokens: { name: string; value: string; usage: string }[] };
  layout: { tokens: { name: string; value: string; usage: string }[] };
};

/** Nome do token -> valor hexadecimal (tema light, único tema da marca hoje). */
export const colors: Record<string, string> = Object.fromEntries(
  tokens.color.tokens.map((token) => [token.name, token.value.light]),
);

/** Famílias tipográficas por papel: display (Sora) e body (IBM Plex Sans). */
export const fontFamilies = tokens.type.families;

/** Estilos de texto nomeados (cover-title, section-title, body, kicker...). */
export const textStyles = Object.fromEntries(
  tokens.type.groups.flatMap((group) =>
    group.styles.map((style) => [style.name, { ...style, family: group.family }]),
  ),
);

/** Escala de espaçamento vertical entre blocos (space-1 a space-4). */
export const spacing: Record<string, string> = Object.fromEntries(
  tokens.spacing.tokens.map((token) => [token.name, token.value]),
);

/** Raio de borda da marca: sempre canto reto. */
export const radius: Record<string, string> = Object.fromEntries(
  tokens.radius.tokens.map((token) => [token.name, token.value]),
);

/** Tokens de layout: espessura de divisória e largura máxima de coluna de texto. */
export const layout: Record<string, string> = Object.fromEntries(
  tokens.layout.tokens.map((token) => [token.name, token.value]),
);

export default tokens;
