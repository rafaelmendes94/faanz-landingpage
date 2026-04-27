import Logo from "@/components/Logo";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BatteryFull,
  Bell,
  Calendar,
  ChevronRight,
  CircleDollarSign,
  Heart,
  Landmark,
  MapPin,
  MessageSquare,
  Plus,
  Signal,
  TrendingUp,
  User,
  Wifi,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

type Status = "Pronto" | "Em obra" | "Captação";

const TABS = ["Ativo", "Concluídos", "Cancelados"] as const;

const PROJECTS: {
  id: string;
  title: string;
  city: string;
  image: string;
  status: Status;
  captacao: number;
  invested: string;
  roi: string;
  updated: string;
}[] = [
  {
    id: "casa-jardins",
    title: "Casa Jardins",
    city: "Campinas, SP",
    image: p1,
    status: "Pronto",
    captacao: 65,
    invested: "R$ 42.500",
    roi: "12,8% a.a.",
    updated: "há 2 dias",
  },
  {
    id: "vila-mariana",
    title: "Vila Mariana Club",
    city: "São Paulo, SP",
    image: p2,
    status: "Em obra",
    captacao: 40,
    invested: "R$ 34.000",
    roi: "11,2% a.a.",
    updated: "há 5 dias",
  },
  {
    id: "reserva-lago",
    title: "Reserva do Lago",
    city: "Ribeirão Preto, SP",
    image: p3,
    status: "Captação",
    captacao: 20,
    invested: "R$ 51.000",
    roi: "13,1% a.a.",
    updated: "há 1 dia",
  },
];

const statusStyles: Record<Status, string> = {
  Pronto: "bg-[hsl(150_60%_45%)] text-white",
  "Em obra": "bg-[hsl(28_92%_55%)] text-white",
  Captação: "bg-[hsl(var(--brand-blue))] text-white",
};

const Projetos = () => {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Ativo");
  const list = tab === "Ativo" ? PROJECTS : [];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-bg pb-32">
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-gradient-brand opacity-10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-md px-6">
        {/* Status bar */}
        <header className="flex items-center justify-between pt-4 text-xs font-semibold text-foreground/80">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <Signal className="h-3.5 w-3.5" />
            <Wifi className="h-3.5 w-3.5" />
            <BatteryFull className="h-4 w-4" />
          </div>
        </header>

        {/* Top bar */}
        <div className="mt-3 grid grid-cols-3 items-center">
          <span />
          <div className="flex justify-center"><Logo size="sm" /></div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              aria-label="Notificações"
              className="relative flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-soft"
            >
              <Bell className="h-5 w-5 text-foreground" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[hsl(var(--brand-blue))]" />
            </button>
            <button
              type="button"
              aria-label="Perfil"
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-blue))]/30 bg-card"
            >
              <User className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
            </button>
          </div>
        </div>

        {/* Title */}
        <section className="mt-5">
          <h2 className="text-3xl font-bold text-foreground">Meus Projetos</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Acompanhe a evolução dos seus investimentos
          </p>
        </section>

        {/* Tabs */}
        <div className="mt-5 flex items-center gap-2 rounded-full bg-secondary/60 p-1">
          {TABS.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={
                  "flex-1 rounded-full px-4 py-2.5 text-sm font-bold transition-all " +
                  (active
                    ? "bg-gradient-brand text-white shadow-brand"
                    : "text-muted-foreground")
                }
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Summary */}
        {list.length > 0 && (
          <section className="mt-5 rounded-3xl bg-card p-4 shadow-soft">
            <div className="grid grid-cols-3 divide-x divide-border">
              <SummaryItem
                icon={Landmark}
                label="Investido total"
                value="R$ 127.500"
                hint="em 3 projetos"
              />
              <SummaryItem
                icon={TrendingUp}
                label="Retorno médio"
                value="12,8% a.a."
                hint="projetado"
                valueClassName="text-[hsl(var(--brand-blue))]"
              />
              <SummaryItem
                icon={CircleDollarSign}
                label="Valor projetado"
                value="R$ 143.820"
                hint="em 12 meses"
              />
            </div>
          </section>
        )}

        {list.length > 0 ? (
          <>
            {/* List header */}
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">
                {list.length} projetos ativos
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground"
              >
                Ordenar
                <ChevronRight className="h-4 w-4 rotate-90" />
              </button>
            </div>

            {/* Project cards */}
            <ul className="mt-3 space-y-4">
              {list.map((proj) => (
                <li key={proj.id}>
                  <Link
                    to={`/property/${proj.id}`}
                    className="block overflow-hidden rounded-3xl bg-card shadow-soft transition active:scale-[0.99]"
                  >
                    <div className="flex">
                      <div className="relative h-auto w-[140px] shrink-0">
                        <img
                          src={proj.image}
                          alt={proj.title}
                          className="h-full w-full object-cover"
                        />
                        <span
                          className={
                            "absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-bold " +
                            statusStyles[proj.status]
                          }
                        >
                          {proj.status}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 p-3.5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="truncate text-base font-bold text-foreground">
                              {proj.title}
                            </h3>
                            <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {proj.city}
                            </p>
                          </div>
                          <Heart className="h-4 w-4 shrink-0 text-muted-foreground" />
                        </div>

                        <div className="mt-2.5">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-muted-foreground">Captação</span>
                            <span className="font-bold text-[hsl(var(--brand-blue))]">
                              {proj.captacao}%
                            </span>
                          </div>
                          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                            <div
                              className="h-full rounded-full bg-gradient-brand"
                              style={{ width: `${proj.captacao}%` }}
                            />
                          </div>
                        </div>

                        <div className="mt-2.5 flex items-stretch gap-3">
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] text-muted-foreground">Investido</p>
                            <p className="truncate text-xs font-bold text-foreground">
                              {proj.invested}
                            </p>
                          </div>
                          <div className="w-px bg-border" />
                          <div className="min-w-0 flex-1">
                            <p className="text-[10px] text-muted-foreground">Retorno proj.</p>
                            <p className="truncate text-xs font-bold text-[hsl(var(--brand-blue))]">
                              {proj.roi}
                            </p>
                          </div>
                        </div>

                        <div className="mt-2 flex items-center justify-between border-t border-border pt-2 text-[10px] text-muted-foreground">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Atualizado {proj.updated}
                          </span>
                          <ChevronRight className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Help card */}
            <Link
              to="/invest"
              className="mt-5 flex items-center gap-3 rounded-2xl bg-[hsl(var(--brand-blue))]/8 p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-foreground">
                  Dúvidas sobre seus investimentos?
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Fale com nosso time de especialistas
                </p>
              </div>
              <ChevronRight className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
            </Link>
          </>
        ) : (
          /* Empty state */
          <section className="mt-16 flex flex-col items-center text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]/10">
              <Landmark className="h-10 w-10 text-[hsl(var(--brand-blue))]" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-foreground">
              Nenhum projeto encontrado
            </h3>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Explore o marketplace para investir em projetos
            </p>
            <Link
              to="/invest"
              className="mt-6 flex h-13 items-center justify-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-bold text-white shadow-brand transition active:scale-[0.99]"
            >
              Ver oportunidades
            </Link>
          </section>
        )}
      </div>

      {/* Floating CTA */}
      <Link
        to="/invest"
        aria-label="Novo investimento"
        className="fixed bottom-28 left-1/2 z-20 ml-[140px] flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand transition active:scale-95"
      >
        <Plus className="h-6 w-6" strokeWidth={3} />
      </Link>

      <BottomNav />
    </main>
  );
};

function SummaryItem({
  icon: Icon,
  label,
  value,
  hint,
  valueClassName,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  hint: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-start gap-2 px-2 first:pl-0 last:pr-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]/10">
        <Icon className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] text-muted-foreground">{label}</p>
        <p className={"text-xs font-bold text-foreground " + (valueClassName ?? "")}>
          {value}
        </p>
        <p className="text-[10px] text-muted-foreground">{hint}</p>
      </div>
    </div>
  );
}

export default Projetos;
