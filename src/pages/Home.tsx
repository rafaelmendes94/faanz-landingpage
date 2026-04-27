import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BatteryFull,
  Bell,
  Briefcase,
  Crown,
  Eye,
  EyeOff,
  Gift,
  MapPin,
  Plus,
  Signal,
  Trophy,
  Wifi,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";
import Logo from "@/components/Logo";
import building from "@/assets/dashboard-building.jpg";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";

type Property = {
  id: string;
  name: string;
  city: string;
  tag: "Pronto" | "Captação" | "Em breve";
  yieldPct: string;
  min: string;
  img: string;
};

const PROPERTIES: Property[] = [
  { id: "1", name: "Casa Jardins", city: "Campinas, SP", tag: "Pronto", yieldPct: "12,8% a.a.", min: "R$ 25.000", img: p1 },
  { id: "2", name: "Vila Mariana Club", city: "São Paulo, SP", tag: "Captação", yieldPct: "11,2% a.a.", min: "R$ 20.000", img: p2 },
  { id: "3", name: "Reserva do Lago", city: "Ribeirão Preto, SP", tag: "Em breve", yieldPct: "13,5% a.a.", min: "R$ 30.000", img: p3 },
];

const TAG_STYLES: Record<Property["tag"], string> = {
  Pronto: "bg-[hsl(var(--brand-blue))] text-white",
  Captação: "bg-emerald-500 text-white",
  "Em breve": "bg-foreground/70 text-white",
};

const QUICK_ACTIONS = [
  { label: "Investir", icon: BarChart3, to: "/invest" },
  { label: "Meus projetos", icon: Briefcase, to: "/projetos" },
  { label: "Bonificação", icon: Gift, to: "/bonificacao" },
  { label: "Planos", icon: Crown, to: "/planos" },
];

const Home = () => {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-bg pb-28">
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-gradient-brand opacity-10 blur-3xl" />

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
        <div className="mt-4 flex items-center justify-between">
          <Logo size="md" />
          <Link
            to="/notificacoes"
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-soft transition-all hover:-translate-y-0.5"
            aria-label="Notificações"
          >
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[hsl(var(--brand-blue))] ring-2 ring-card" />
          </Link>
        </div>

        {/* Greeting */}
        <div className="mt-5">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Bom dia, João! <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Que bom te ver por aqui.</p>
        </div>

        {/* Patrimônio card */}
        <section className="relative mt-4 overflow-hidden rounded-[24px] bg-gradient-brand p-4 text-white shadow-brand">
          <img
            src={building}
            alt=""
            aria-hidden="true"
            width={800}
            height={800}
            loading="lazy"
            className="pointer-events-none absolute -right-10 top-0 h-full w-1/2 object-cover opacity-30 [mask-image:linear-gradient(to_left,black,transparent)]"
          />
          <div className="relative">
            <div className="flex items-center gap-2 text-xs font-medium text-white/80">
              Seu patrimônio
              <button
                type="button"
                onClick={() => setShowBalance((v) => !v)}
                aria-label={showBalance ? "Esconder saldo" : "Mostrar saldo"}
              >
                {showBalance ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              </button>
            </div>
            <p className="mt-1 text-2xl font-bold tracking-tight">
              {showBalance ? (
                <>
                  <span className="text-sm font-semibold align-top">R$ </span>
                  125.000<span className="text-sm font-semibold">,00</span>
                </>
              ) : (
                "R$ ••••••"
              )}
            </p>
            <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] backdrop-blur">
              <ArrowUpRight className="h-3 w-3" />
              <span className="font-semibold">+2,35%</span>
              <span className="text-white/80">vs mês passado</span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/15 pt-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                  <Briefcase className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-white/80">Projetos</p>
                  <p className="text-sm font-bold">3</p>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l border-white/15 pl-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                  <Briefcase className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-[10px] text-white/80">Cotas</p>
                  <p className="text-sm font-bold">7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ações rápidas */}
        <section className="mt-4">
          <h3 className="text-sm font-bold text-foreground">Ações rápidas</h3>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {QUICK_ACTIONS.map(({ label, icon: Icon, to }) => (
              <Link
                key={label}
                to={to}
                className="flex flex-col items-center gap-1.5 rounded-2xl bg-card p-2 shadow-soft transition-all hover:-translate-y-0.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-[hsl(var(--brand-blue))]">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-medium leading-tight text-foreground text-center">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Oportunidades */}
        <section className="mt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-foreground">Oportunidades</h3>
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[hsl(var(--brand-blue))]"
            >
              Ver todos <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="-mx-6 mt-2 overflow-x-auto no-scrollbar">
            <div className="flex gap-3 px-6 pb-1">
              {PROPERTIES.map((p) => (
                <article
                  key={p.id}
                  className="w-52 shrink-0 overflow-hidden rounded-2xl bg-card shadow-soft"
                >
                  <div className="relative">
                    <img
                      src={p.img}
                      alt={p.name}
                      width={800}
                      height={600}
                      loading="lazy"
                      className="h-24 w-full object-cover"
                    />
                    <span
                      className={
                        "absolute left-2 top-2 rounded-md px-2 py-0.5 text-[10px] font-semibold " +
                        TAG_STYLES[p.tag]
                      }
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-bold text-foreground">{p.name}</h4>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {p.city}
                    </p>

                    <div className="mt-2 flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-muted-foreground">Rentabilidade</p>
                        <p className="text-sm font-bold text-[hsl(var(--brand-blue))]">{p.yieldPct}</p>
                      </div>
                      <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-[hsl(var(--brand-blue))] transition-all hover:-translate-y-0.5"
                        aria-label={`Ver ${p.name}`}
                      >
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Indique e ganhe */}
        <section className="mt-3 flex items-center gap-3 rounded-2xl bg-secondary/60 p-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand">
            <Trophy className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <h4 className="text-xs font-bold text-foreground">Indique e ganhe</h4>
            <p className="text-[11px] text-muted-foreground">
              Convide amigos e ganhe bônus.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[hsl(var(--brand-blue))]"
          >
            Saiba mais <ArrowRight className="h-3 w-3" />
          </button>
        </section>
      </div>

      {/* Floating Action Button */}
      <button
        type="button"
        aria-label="Adicionar"
        className="fixed bottom-24 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand transition-all hover:-translate-y-0.5"
      >
        <Plus className="h-6 w-6" />
      </button>

      <BottomNav />
    </main>
  );
};

export default Home;
