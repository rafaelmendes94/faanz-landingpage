import { useState } from "react";
import {
  BarChart3,
  BatteryFull,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  ConstructionIcon,
  FileText,
  Gift,
  Landmark,
  ListChecks,
  Signal,
  Trophy,
  Wifi,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import a4 from "@/assets/avatar-4.jpg";
import a5 from "@/assets/avatar-5.jpg";

const TABS = ["Todos", "Corretores", "Investidores", "Construtoras"] as const;

type Person = {
  pos: number;
  name: string;
  role: string;
  pts: number;
  avatar: string;
  isYou?: boolean;
};

const RANKING: Person[] = [
  { pos: 1, name: "Ricardo Almeida", role: "Corretor", pts: 3850, avatar: a1 },
  { pos: 2, name: "Marina Souza", role: "Investidora", pts: 2980, avatar: a2 },
  { pos: 3, name: "Você", role: "Investidor", pts: 2450, avatar: a3, isYou: true },
  { pos: 4, name: "Gabriel Martins", role: "Corretor", pts: 2150, avatar: a4 },
  { pos: 5, name: "Juliana Ferraz", role: "Investidora", pts: 1890, avatar: a5 },
];

const fmt = (n: number) => n.toLocaleString("pt-BR");

const Bonificacao = () => {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Todos");
  const myPoints = 2450;
  const goal = 3000;
  const progress = (myPoints / goal) * 100;

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

        {/* Title */}
        <section className="mt-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-3xl font-bold text-foreground">Bonificação Mensal</h1>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              Abril 2026
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[hsl(var(--brand-blue))]/10 px-3 py-2 text-xs font-bold text-[hsl(var(--brand-blue))]">
            <Clock className="h-3.5 w-3.5" />
            6 dias restantes
          </span>
        </section>

        {/* Hero ranking card */}
        <section className="mt-5 overflow-hidden rounded-3xl shadow-brand">
          <div className="relative bg-gradient-brand p-5 text-white">
            <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 opacity-30">
              <Trophy className="h-32 w-32" strokeWidth={1.2} />
            </div>
            <div className="relative grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-white/80">Sua posição</p>
                <p className="mt-1 text-4xl font-bold leading-tight">Top 8%</p>
                <p className="mt-2 text-xs leading-snug text-white/85">
                  Você está entre os
                  <br />
                  melhores da plataforma!
                </p>
              </div>
              <div className="border-l border-white/25 pl-4">
                <p className="text-xs text-white/80">Total de pontos</p>
                <p className="mt-1 text-4xl font-bold leading-tight">{fmt(2450)}</p>
                <button
                  type="button"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur transition active:scale-95"
                >
                  <BarChart3 className="h-3.5 w-3.5" />
                  Ver histórico
                </button>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-4 divide-x divide-border bg-card py-4">
            <Metric icon={Landmark} label="Imóveis" value="12" />
            <Metric icon={ConstructionIcon} label="Obras iniciadas" value="5" />
            <Metric icon={CheckCircle2} label="Obras concluídas" value="2" />
            <Metric icon={FileText} label="Captado" value="R$ 125k" />
          </div>
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
                  "flex-1 rounded-full px-3 py-2 text-xs font-bold transition-all " +
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

        {/* Ranking list */}
        <section className="mt-4 rounded-3xl bg-card p-2 shadow-soft">
          <ul className="divide-y divide-border">
            {RANKING.map((p) => (
              <li
                key={p.pos}
                className={
                  "flex items-center gap-3 rounded-2xl px-2 py-3 transition-colors " +
                  (p.isYou
                    ? "border border-[hsl(var(--brand-blue))]/40 bg-[hsl(var(--brand-blue))]/8"
                    : "")
                }
              >
                <PositionBadge pos={p.pos} highlight={p.isYou} />
                <img
                  src={p.avatar}
                  alt={p.name}
                  loading="lazy"
                  width={48}
                  height={48}
                  className={
                    "h-11 w-11 shrink-0 rounded-full object-cover " +
                    (p.isYou ? "ring-2 ring-[hsl(var(--brand-blue))]" : "")
                  }
                />
                <div className="min-w-0 flex-1">
                  <p
                    className={
                      "truncate text-sm font-bold " +
                      (p.isYou ? "text-[hsl(var(--brand-blue))]" : "text-foreground")
                    }
                  >
                    {p.name}
                  </p>
                  <p className="truncate text-[11px] text-muted-foreground">{p.role}</p>
                </div>
                <p className="shrink-0 text-sm font-bold text-[hsl(var(--brand-blue))]">
                  {fmt(p.pts)}
                  <span className="ml-1 text-[10px] font-semibold text-muted-foreground">pts</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Reward card */}
        <section className="mt-5 rounded-3xl bg-card p-5 shadow-soft">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--brand-blue))]/10">
              <Gift className="h-6 w-6 text-[hsl(var(--brand-blue))]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-foreground">Próxima recompensa</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Faltam <span className="font-bold text-foreground">550 pontos</span> para liberar
                bônus de{" "}
                <span className="font-bold text-[hsl(var(--brand-blue))]">R$ 500.</span>
              </p>
            </div>
            <div className="shrink-0 rounded-2xl bg-[hsl(var(--brand-blue))]/8 px-3 py-2 text-center">
              <p className="text-base font-bold text-[hsl(var(--brand-blue))]">R$ 500</p>
              <p className="text-[9px] leading-tight text-muted-foreground">
                Bônus em
                <br />
                dinheiro
              </p>
            </div>
          </div>

          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-gradient-brand"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-[11px]">
            <span className="font-bold text-[hsl(var(--brand-blue))]">{fmt(myPoints)} pontos</span>
            <span className="font-semibold text-muted-foreground">{fmt(goal)} pontos</span>
          </div>

          <button
            type="button"
            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-[hsl(var(--brand-blue))]/40 bg-card text-sm font-bold text-[hsl(var(--brand-blue))] transition active:scale-[0.99]"
          >
            <ListChecks className="h-4 w-4" />
            Ver regras da bonificação
          </button>
        </section>
      </div>

      <BottomNav />
    </main>
  );
};

function Metric({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-1 text-center">
      <Icon className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
      <p className="text-[10px] leading-tight text-muted-foreground">{label}</p>
      <p className="text-sm font-bold text-foreground">{value}</p>
    </div>
  );
}

function PositionBadge({ pos, highlight }: { pos: number; highlight?: boolean }) {
  if (pos === 1) {
    return (
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
        <Trophy className="absolute h-9 w-9 text-[hsl(38_92%_55%)]" fill="hsl(38 92% 55%)" />
        <span className="relative text-xs font-bold text-white">1</span>
      </div>
    );
  }
  if (pos === 2) {
    return (
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
        <Trophy className="absolute h-9 w-9 text-[hsl(0_0%_70%)]" fill="hsl(0 0% 70%)" />
        <span className="relative text-xs font-bold text-white">2</span>
      </div>
    );
  }
  return (
    <div
      className={
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold " +
        (highlight
          ? "bg-[hsl(var(--brand-blue))] text-white"
          : "bg-secondary text-muted-foreground")
      }
    >
      {pos}
    </div>
  );
}

export default Bonificacao;
