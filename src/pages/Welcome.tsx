import Logo from "@/components/Logo";
import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  BatteryFull,
  Building2,
  PieChart,
  Signal,
  Shield,
  TrendingUp,
  Wallet,
  Wifi,
} from "lucide-react";
import hero from "@/assets/welcome-hero.jpg";

type Profile = "investidor" | "corretor" | "construtora";

const COPY: Record<
  Profile,
  { label: string; subtitle: string; card: string; cta: string; metricA: string; metricB: string }
> = {
  investidor: {
    label: "Investidor",
    subtitle: "Pronto para começar a investir em oportunidades reais?",
    card: "Descubra imóveis com potencial de valorização e acompanhe seus rendimentos em tempo real.",
    cta: "Explorar oportunidades",
    metricA: "Rentabilidade média",
    metricB: "Projetos ativos",
  },
  corretor: {
    label: "Corretor",
    subtitle: "Pronto para fechar negócios e aumentar suas comissões?",
    card: "Acesse oportunidades exclusivas e conecte investidores aos melhores projetos.",
    cta: "Ver imóveis disponíveis",
    metricA: "Comissão média",
    metricB: "Imóveis disponíveis",
  },
  construtora: {
    label: "Construtora",
    subtitle: "Pronto para captar investimentos para seus projetos?",
    card: "Gerencie seus projetos e conecte-se com investidores qualificados.",
    cta: "Cadastrar projeto",
    metricA: "Captação média",
    metricB: "Investidores ativos",
  },
};

const Welcome = () => {
  const [params] = useSearchParams();
  const profile = (params.get("profile") as Profile) || "investidor";
  const name = params.get("name") || "João";
  const copy = useMemo(() => COPY[profile] ?? COPY.investidor, [profile]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-bg">
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-gradient-brand opacity-15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-gradient-brand opacity-10 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-6 pb-10">
        {/* Status bar */}
        <header className="flex items-center justify-between pt-4 text-xs font-semibold text-foreground/80">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <Signal className="h-3.5 w-3.5" />
            <Wifi className="h-3.5 w-3.5" />
            <BatteryFull className="h-4 w-4" />
          </div>
        </header>

        {/* Logo */}
        <div className="mt-6 flex justify-center"><Logo size="lg" /></div>

        {/* Greeting */}
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
          Bem-vindo, {name}! <span className="inline-block animate-[wave_2.5s_ease-in-out_infinite] origin-[70%_70%]">👋</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xs text-center text-sm leading-relaxed text-muted-foreground">
          {copy.subtitle}
        </p>

        {/* Profile pill */}
        <div className="mx-auto mt-5 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-soft">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary text-[hsl(var(--brand-blue))]">
            <TrendingUp className="h-4 w-4" />
          </div>
          <span className="text-sm text-muted-foreground">
            Seu perfil: <span className="font-semibold text-[hsl(var(--brand-blue))]">{copy.label}</span>
          </span>
        </div>

        {/* Hero illustration */}
        <div className="relative mt-6 overflow-hidden rounded-[32px] shadow-soft">
          <img
            src={hero}
            alt="Imóvel premium com vista para o mar"
            width={1280}
            height={832}
            className="h-56 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--brand-blue-deep))]/30 via-[hsl(var(--brand-blue))]/10 to-transparent" />

          {/* Floating metric cards */}
          <div className="absolute left-4 top-4 rounded-2xl bg-card/95 px-4 py-2.5 shadow-soft backdrop-blur animate-[float_4s_ease-in-out_infinite]">
            <p className="text-[10px] text-muted-foreground">{copy.metricA}</p>
            <p className="text-lg font-bold text-foreground">
              12,4% <span className="text-xs font-medium text-muted-foreground">a.a.</span>
            </p>
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl bg-card/95 px-4 py-2.5 shadow-soft backdrop-blur">
            <Building2 className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
            <div>
              <p className="text-[10px] text-muted-foreground">{copy.metricB}</p>
              <p className="text-base font-bold text-foreground">24</p>
            </div>
          </div>
          <div className="absolute right-5 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-card/90 shadow-soft backdrop-blur">
            <TrendingUp className="h-6 w-6 text-[hsl(var(--brand-blue))]" />
          </div>
        </div>

        {/* Highlight card */}
        <section className="mt-5 flex items-start gap-4 rounded-[28px] bg-card p-5 shadow-soft">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-[hsl(var(--brand-blue))]">
            <Building2 className="h-5 w-5" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-bold text-foreground">
              {profile === "investidor" && "Descubra imóveis com potencial de valorização."}
              {profile === "corretor" && "Acesse oportunidades exclusivas."}
              {profile === "construtora" && "Capte investidores qualificados."}
            </span>{" "}
            {copy.card.replace(
              profile === "investidor"
                ? "Descubra imóveis com potencial de valorização e "
                : profile === "corretor"
                  ? "Acesse oportunidades exclusivas e "
                  : "Gerencie seus projetos e ",
              "",
            )}
          </p>
        </section>

        {/* Actions — same pattern as login */}
        <div className="mt-6 space-y-3">
          <Link
            to="/home"
            className="group flex h-16 w-full items-center justify-center gap-2 rounded-[32px] bg-gradient-brand px-6 text-base font-semibold text-white shadow-brand transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            {copy.cta}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/"
            className="block w-full text-center text-sm font-semibold text-[hsl(var(--brand-blue))] transition-opacity hover:opacity-70"
          >
            Ver depois
          </Link>
        </div>

        {/* Mini features */}
        <div className="mt-6 grid grid-cols-3 gap-2 rounded-[24px] border border-border bg-card/60 p-4">
          {[
            { icon: Shield, label: "Investimentos seguros" },
            { icon: PieChart, label: "Acompanhamento em tempo real" },
            { icon: Wallet, label: "Diversifique com facilidade" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-center">
              <Icon className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
              <span className="text-[10px] leading-tight text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Welcome;
