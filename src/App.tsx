import type { ReactNode } from "react";
import logo from "./assets/logos/conexus-logo.svg";
import { ReguaAbertura } from "./components/ReguaAbertura";
import { KickerTitulo } from "./components/KickerTitulo";
import { ListaNumerada } from "./components/ListaNumerada";
import { MarcadorLista } from "./components/MarcadorLista";
import { BlocoCitacao } from "./components/BlocoCitacao";
import { BlocoNavyDeclaracao } from "./components/BlocoNavyDeclaracao";
import { Etiqueta } from "./components/Etiqueta";

function Secao({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="mb-[34px]">
      <h2 className="mb-[14px] font-body text-[10.5px] font-normal uppercase tracking-[0.2em] text-teal-profundo">
        {titulo}
      </h2>
      <div className="flex flex-col gap-[26px]">{children}</div>
    </section>
  );
}

function Card({ subtitulo, children }: { subtitulo: string; children: ReactNode }) {
  return (
    <div className="border border-regua p-[26px]">
      <div className="mb-[18px] font-body text-[13px] text-apoio">{subtitulo}</div>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="mx-auto max-w-[820px] px-[40px] py-[56px]">
      <header className="mb-[34px] flex items-center justify-between border-b border-regua pb-[20px]">
        <img src={logo} alt="Conexus" className="h-[32px]" />
        <span className="font-body text-[10.5px] uppercase tracking-[0.2em] text-teal-profundo">
          Design System
        </span>
      </header>

      <Secao titulo="Estrutura">
        <Card subtitulo="Régua de abertura — fundo claro e fundo navy">
          <div className="flex gap-[40px]">
            <ReguaAbertura fundo="claro" />
            <div className="flex-1 bg-navy p-[16px]">
              <ReguaAbertura fundo="navy" />
            </div>
          </div>
        </Card>
        <Card subtitulo="Kicker e título — trinca fixa de abertura de seção">
          <KickerTitulo kicker="Nossa atuação" title="Da análise à solução" />
        </Card>
      </Secao>

      <Secao titulo="Conteúdo">
        <Card subtitulo="Lista numerada — número em Sora 300, título em Sora 600">
          <ListaNumerada
            items={[
              { numero: "01", titulo: "Consultoria em Tecnologia" },
              { numero: "02", titulo: "Análise de Processos" },
              { numero: "03", titulo: "Desenvolvimento e Implantação" },
            ]}
          />
        </Card>
        <Card subtitulo="Marcador de lista — marcador teal, texto cinza escuro">
          <MarcadorLista
            items={[
              "Marcador teal, texto cinza escuro",
              "Duas colunas quando passa de quatro itens",
              { texto: "Variante com quadrado, para destaques", destaque: true },
            ]}
          />
        </Card>
        <Card subtitulo="Etiquetas — contorno neutro; navy sólido para a etiqueta em destaque">
          <div className="flex flex-wrap gap-[10px]">
            <Etiqueta>Gerente de Projetos</Etiqueta>
            <Etiqueta>Analista de Negócios</Etiqueta>
            <Etiqueta>Dados e BI</Etiqueta>
            <Etiqueta variante="destaque">Etiqueta em destaque</Etiqueta>
          </div>
        </Card>
      </Secao>

      <Secao titulo="Destaque">
        <Card subtitulo="Bloco de citação — fundo claro com filete teal de 3px no topo">
          <BlocoCitacao frase="Tecnologia como ferramenta estratégica." />
        </Card>
        <Card subtitulo="Bloco navy de declaração — um por peça, no máximo">
          <BlocoNavyDeclaracao frase="Proposta em até 48 horas." />
        </Card>
      </Secao>
    </div>
  );
}
