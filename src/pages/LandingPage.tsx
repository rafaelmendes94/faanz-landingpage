import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Crown,
  Facebook,
  Handshake,
  Heart,
  Instagram,
  Layers,
  Linkedin,
  MapPin,
  Menu,
  MessageSquare,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserPlus,
  Users,
  Wallet,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import Logo from "@/components/Logo";
import ambassador from "@/assets/landing-ambassador.jpg";
import dashboard from "@/assets/dashboard-building.jpg";
import heroAthlete from "@/assets/landing-athlete.png";
import heroSkyline from "@/assets/landing-skyline.png";
import heroBg from "@/assets/hero-desktop.svg";
import heroBgMobile from "@/assets/hero-mobile.png";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Imóveis", href: "#imoveis" },
  { label: "Por que escolher", href: "#vantagens" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "Calculadora", href: "#calculadora" },
  { label: "FAQ", href: "#faq" },
];

const STATS = [
  { value: "+12.500", label: "Investidores ativos" },
  { value: "+45", label: "Projetos financiados" },
  { value: "R$ 250M+", label: "Investidos na plataforma" },
  { value: "+12,8%", label: "Rentabilidade média" },
];

const STEPS = [
  { icon: Users, title: "Você Se Conecta", text: "Você se cadastra e escolhe seu plano. Você agora faz parte de uma comunidade que está transformando o mercado." },
  { icon: Target, title: "Você Explora Oportunidades", text: "Acesse um catálogo com R$10 bilhões em VGV. Lançamentos, pré-lançamentos, incorporações. Documentação completa." },
  { icon: MessageSquare, title: "Você Recebe Orientação", text: "Seu gestor dedicado ajuda você a entender a oportunidade. Você decide no seu tempo, sem pressão." },
  { icon: Handshake, title: "Você Vende", text: "Você trabalha direto com a construtora. Sem intermediários. Você fecha a venda." },
  { icon: Zap, title: "Você Recebe", text: "A comissão é sua. Integral. Sem dividir. Você recebe via PIX em até 5 dias úteis. Prazo cumprido." },
  { icon: TrendingUp, title: "Você Cresce", text: "Consultoria mensal ajuda você a vender melhor. Você não apenas vende. Você evolui." },
];

const ADVANTAGES = [
  {
    icon: Crown,
    title: "Autoridade Global, Expertise Local",
    text: "A credibilidade de uma marca internacional — Neymar, uma das maiores figuras do Brasil — com a proximidade de quem entende o seu mercado.",
  },
  {
    icon: Sparkles,
    title: "Sensação de Oportunidade",
    text: "Lançamentos premium de alto padrão, pré-lançamentos com você em primeiro e incorporações com altíssimo potencial.",
  },
  {
    icon: ShieldCheck,
    title: "Você Decide, Nós Orientamos",
    text: "Gestor dedicado (Plano Ouro), consultoria mensal personalizada e suporte 24/7 disponível para todos os corretores.",
  },
  {
    icon: Check,
    title: "Processo Transparente",
    text: "Clareza total em cada etapa, documentos verificados e prazos cumpridos sempre. Sem ruído, sem surpresas.",
  },
];

const PROPERTIES = [
  { name: "Residencial Aurora", city: "São Paulo, SP", price: "R$ 850.000", tag: "Lançamento", img: p1 },
  { name: "Edifício Sunset", city: "Rio de Janeiro, RJ", price: "R$ 1.200.000", tag: "Pré-lançamento", img: p2 },
  { name: "Condomínio Vista Mar", city: "Florianópolis, SC", price: "R$ 2.500.000", tag: "Pronto", img: p3 },
  { name: "Torres Premium", city: "Curitiba, PR", price: "R$ 680.000", tag: "Lançamento", img: p1 },
  { name: "Villa Garden", city: "Belo Horizonte, MG", price: "R$ 920.000", tag: "Captando", img: p2 },
  { name: "Sky Residence", city: "Brasília, DF", price: "R$ 1.800.000", tag: "Pré-lançamento", img: p3 },
];

const STORIES = [
  "/stories/story-1.mp4",
  "/stories/story-2.mp4",
  "/stories/story-3.mp4",
  "/stories/story-4.mp4",
  "/stories/story-5.mp4",
  "/stories/story-6.mp4",
  "/stories/story-7.mp4",
  "/stories/story-8.mp4",
  "/stories/story-9.mp4",
];

const NUMBERS = [
  { value: "R$ 10Bi", label: "VGV Disponível" },
  { value: "+500", label: "Empreendimentos" },
  { value: "100%", label: "Comissão no Prazo" },
  { value: "Nº 1", label: "Em Satisfação" },
];

const PLANS = [
  {
    id: "bronze",
    name: "Bronze",
    tagline: "O Começo",
    price: "R$ 500,00",
    commission: "1,5%",
    icon: Star,
    benefits: ["Acesso ao marketplace", "Suporte por email", "Painel básico", "Participação no ranking"],
    cta: "Comprar Bronze",
  },
  {
    id: "prata",
    name: "Prata",
    tagline: "O Crescimento",
    price: "R$ 1.000,00",
    commission: "2,5%",
    icon: Sparkles,
    benefits: ["Tudo do Bronze", "Destaque no ranking", "Suporte prioritário", "Painel avançado", "Badge de qualificação"],
    cta: "Comprar Prata",
  },
  {
    id: "ouro",
    name: "Ouro",
    tagline: "A Liderança",
    price: "R$ 1.500,00",
    commission: "4%",
    icon: Crown,
    highlight: true,
    benefits: ["Tudo do Prata", "Topo do ranking", "Suporte VIP 24/7", "Gestor dedicado", "Pré-lançamentos exclusivos", "Consultoria mensal"],
    cta: "Comprar Ouro",
  },
];

const CALC_ROWS = [
  { label: "Venda 1", deal: "R$ 300 mil", commission: "R$ 12.000" },
  { label: "Venda 2", deal: "R$ 400 mil", commission: "R$ 16.000" },
  { label: "Venda 3", deal: "R$ 350 mil", commission: "R$ 14.000" },
];

const FAQS = [
  { q: "Como a Faanz é diferente de outras plataformas?", a: "Combinamos a chancela e autoridade de marca de Neymar com um catálogo curado, gestor dedicado e comissão integral paga em até 5 dias úteis via PIX." },
  { q: "Qual é o prazo para receber a comissão?", a: "Em até 5 dias úteis após o fechamento, direto na sua conta via PIX. Prazo cumprido sempre." },
  { q: "Posso trabalhar com minha imobiliária?", a: "Sim. Você mantém sua atuação atual e usa a Faanz como uma camada extra de oportunidades premium e suporte." },
  { q: "Como funciona o acesso a pré-lançamentos?", a: "Pré-lançamentos exclusivos são liberados primeiro para o Plano Ouro, com documentação completa e acesso direto à construtora." },
  { q: "Quanto tempo leva para recuperar o investimento do Ouro?", a: "Com a média de 3 vendas/mês no plano Ouro, o investimento se paga em uma única venda — sobrando lucro líquido a partir do primeiro mês." },
  { q: "Os empreendimentos são seguros?", a: "Todos passam por análise jurídica e documental. Você só vê o que já foi verificado pela nossa equipe." },
  { q: "Posso cancelar a qualquer momento?", a: "Sim. Sem fidelidade. Cancele quando quiser direto pelo painel ou pelo nosso suporte." },
];

const StoreButton = ({ store }: { store: "play" | "ios" }) => (
  <a
    href="#"
    className="inline-flex items-center gap-3 rounded-2xl bg-foreground px-4 py-2.5 text-white shadow-soft transition-all hover:-translate-y-0.5"
  >
    {store === "play" ? (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.4-9.7-9.4-9.7zm10.8 11l2.6 2.7-12 6.6c-.3.2-.6.2-.9.1l10.3-9.4zm0-2.6L4.1 1.3c.3-.1.6-.1.9.1l12 6.6-2.6 2.7zm6.8 1.3c0 .6-.3 1.1-.8 1.4l-2.7 1.5-2.9-3 2.9-3 2.7 1.5c.5.4.8.9.8 1.6z"/></svg>
    ) : (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M16.5 12.6c0-2.5 2-3.7 2.1-3.8-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.2 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3.1 2.4 1.2-.1 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.4-2.8-.1-.1-2.7-1-2.8-4zM14.1 5c.7-.8 1.1-2 1-3.1-1 0-2.2.6-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.4z"/></svg>
    )}
    <span className="flex flex-col items-start leading-tight">
      <span className="text-[10px] uppercase tracking-wide opacity-80">{store === "play" ? "Disponível no" : "Baixar na"}</span>
      <span className="text-sm font-semibold">{store === "play" ? "Google Play" : "App Store"}</span>
    </span>
  </a>
);

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const [stepsVisible, setStepsVisible] = useState(false);

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStepsVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-bg text-foreground">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <Link to="/" aria-label="Faanz Real Estate">
            <Logo size="md" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a key={n.label} href={n.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-[hsl(var(--brand-blue))]">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#download"
              className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5 sm:inline-flex"
            >
              Baixar o app
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-soft lg:hidden"
              aria-label="Abrir menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-border/60 bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-gradient-brand px-5 py-2.5 text-center text-sm font-semibold text-white shadow-brand"
              >
                Baixar o app
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="inicio" className="relative overflow-hidden bg-white pb-32 lg:pb-40">
        <img
          src={heroBgMobile}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover lg:hidden"
          style={{ objectPosition: "center top" }}
        />
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full select-none object-cover object-right lg:block"
        />

        {/* Strong fade extending past the seam to eliminate the hard cut */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-32 h-[260px] bg-gradient-to-b from-transparent via-white to-background"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pt-[440px] pb-14 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24 lg:pt-24">
          <div className="relative z-10 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-blue))]/20 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[hsl(var(--brand-blue))] shadow-soft">
              <Sparkles className="h-3.5 w-3.5" /> Plataforma oficial Faanz
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[54px]">
              A nova era da{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">corretagem imobiliária</span>{" "}
              começa agora.
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground sm:text-lg lg:mx-0">
              Acesse as melhores oportunidades do Brasil, venda direto com construtoras e fique com 100% da sua comissão.
            </p>

            <ul className="mx-auto mt-6 grid max-w-md grid-cols-1 gap-2.5 sm:grid-cols-2 lg:mx-0 lg:max-w-none">
              {[
                "+R$ 10 bilhões em oportunidades",
                "Pré-lançamentos e alto padrão",
                "Sem intermediários",
                "Receba via PIX em até 5 dias",
              ].map((b) => (
                <li key={b} className="flex items-center justify-center gap-2 text-sm font-medium text-foreground/90 lg:justify-start">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]/10 text-[hsl(var(--brand-blue))]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col items-center gap-3 lg:flex-row lg:flex-wrap lg:items-center">
              <a
                href="#imoveis"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-brand transition-all hover:-translate-y-0.5"
              >
                Explorar oportunidades <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-10 py-3 text-sm font-semibold text-foreground shadow-soft transition-all hover:-translate-y-0.5"
              >
                Já tenho conta
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </section>

      {/* SOCIAL PROOF — overlaps hero to bridge the cut */}
      <section className="relative z-20 mx-auto -mt-24 max-w-7xl px-5 lg:-mt-28 lg:px-8">
        <div className="animate-rise-in rounded-[28px] border border-border bg-card/95 p-5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.08)] backdrop-blur-md sm:p-7">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="group flex items-center gap-3 animate-count-up"
                style={{ animationDelay: `${200 + i * 120}ms` }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--brand-blue))]/10 text-[hsl(var(--brand-blue))] animate-icon-pop transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ animationDelay: `${350 + i * 120}ms` }}
                >
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="relative overflow-hidden bg-background -mt-64 pt-72 pb-24 lg:mt-0 lg:pt-32 lg:pb-32">
        {/* Soft gradient on top to blend with previous section (mobile) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent lg:hidden"
        />
        {/* Ambient awwwards-style background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[hsl(var(--brand-blue))]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="hidden lg:block pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--brand-blue))]/30 to-transparent"
        />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-blue))]/20 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] shadow-soft">
              <Sparkles className="h-3.5 w-3.5" /> Processo
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Como{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">funciona</span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Seis passos para transformar oportunidades imobiliárias em comissão direta no seu bolso.
            </p>
          </div>

          <div ref={stepsRef} className="relative mt-20">
            <ol className="grid grid-cols-1 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const delay = 400 + i * 350;
                return (
                  <li
                    key={s.title}
                    className="group relative flex flex-col items-center text-center"
                    style={{
                      opacity: stepsVisible ? 1 : 0,
                      transform: stepsVisible ? "translateY(0)" : "translateY(24px)",
                      transition:
                        "opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                      transitionDelay: `${delay}ms`,
                    }}
                  >
                    {/* Icon (centered on the line) */}
                    <div className="relative">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 -z-10 rounded-full bg-[hsl(var(--brand-blue))]/25 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute -inset-2 rounded-full border border-[hsl(var(--brand-blue))]/15 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:border-[hsl(var(--brand-blue))]/35"
                      />
                      <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-card shadow-[0_10px_30px_-15px_rgba(29,78,216,0.35)] ring-1 ring-[hsl(var(--brand-blue))]/15 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_-15px_rgba(29,78,216,0.45)]">
                        <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--brand-blue))]/15 to-[hsl(var(--brand-blue))]/5 text-[hsl(var(--brand-blue))] transition-transform duration-500 group-hover:scale-105">
                          <Icon className="h-7 w-7" strokeWidth={1.75} />
                        </div>
                        <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-[11px] font-bold text-white shadow-brand ring-2 ring-background">
                          {i + 1}
                        </span>
                      </div>
                    </div>

                    {/* Step label below the icon */}
                    <span
                      className="mt-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[hsl(var(--brand-blue))]/70"
                      style={{
                        opacity: stepsVisible ? 1 : 0,
                        transition: "opacity 0.5s ease-out",
                        transitionDelay: `${delay + 150}ms`,
                      }}
                    >
                      Passo {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-2 text-lg font-bold tracking-tight text-foreground">{s.title}</h3>
                    <p className="mt-2 max-w-[240px] text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>

                    <span
                      aria-hidden="true"
                      className="mt-4 block h-px w-10 origin-center scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100"
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* IMÓVEIS EM DESTAQUE */}
      {/* DESTAQUES — Stories estilo Instagram */}
      <section id="imoveis" className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-blue))]/20 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] shadow-soft">
              <Sparkles className="h-3.5 w-3.5" /> Destaques
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Destaques</h2>
            <p className="mt-2 text-muted-foreground">Destaque dos empreendimentos disponíveis na plataforma</p>
          </div>
        </div>

        <div className="mt-10 -mx-5 px-5 lg:mx-0 lg:px-0">
          <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {STORIES.map((src, i) => (
              <article
                key={src}
                className="group relative shrink-0 snap-start overflow-hidden rounded-[28px] bg-foreground shadow-soft transition-transform hover:-translate-y-1"
                style={{ width: "220px", height: "390px" }}
              >
                {/* Instagram-style gradient ring */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-[2px] rounded-[30px] opacity-90"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #feda75)",
                  }}
                />
                <div className="relative h-full w-full overflow-hidden rounded-[26px] bg-foreground">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                  {/* Header — avatar + handle (insta vibe) */}
                  <div className="absolute left-3 right-3 top-3 flex items-center gap-2">
                    <div className="rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] p-[2px]">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
                        <Logo size="sm" />
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-white drop-shadow">@faanz</span>
                    <span className="ml-auto text-[10px] font-medium text-white/80">{i + 1}h</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO + VANTAGENS */}
      <section id="vantagens" className="relative overflow-hidden bg-secondary/30 py-10 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Vender imóvel é uma{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">decisão importante.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Quando você escolhe uma plataforma para trabalhar, não está apenas escolhendo um sistema.
              Está escolhendo um parceiro. Um especialista. Uma marca que vai estar ao seu lado.
            </p>
            <p className="mt-3 text-base font-semibold text-foreground">
              A Faanz foi criada com essa responsabilidade em mente.
            </p>
          </div>

          <div className="mt-8 lg:mt-16">
            <h3 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Por que escolher a Faanz</h3>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10">
              {ADVANTAGES.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.title} className="group rounded-[24px] border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-brand/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-blue))]/10 text-[hsl(var(--brand-blue))] transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h4 className="mt-4 text-lg font-bold">{a.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--brand-blue)/0.35),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Liderança
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Números que mostram liderança</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Quando você escolhe um parceiro, quer saber que ele é confiável, tem histórico e funciona.
          </p>

          <div className="mt-14 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {NUMBERS.map((n) => (
              <div
                key={n.label}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-white/25"
              >
                <p className="text-3xl font-bold tracking-tight sm:text-4xl">
                  <span className="bg-gradient-to-r from-white to-[hsl(var(--brand-blue))] bg-clip-text text-transparent">{n.value}</span>
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/65">{n.label}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-sm text-white/70">
            Corretores de todo o Brasil estão escolhendo trabalhar aqui porque vendem mais, ganham mais e crescem mais rápido.
          </p>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-blue))]/20 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] shadow-soft">
            <Crown className="h-3.5 w-3.5" /> Planos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Escolha o plano que alinha com seus objetivos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Acesso digital imediato após a confirmação do pagamento. Credenciais enviadas por e-mail.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            const isOuro = plan.highlight;
            return (
              <article
                key={plan.id}
                className={
                  "relative flex flex-col rounded-[28px] border bg-card p-7 transition-all " +
                  (isOuro
                    ? "border-[hsl(var(--brand-blue))]/40 shadow-brand md:-translate-y-3 md:scale-[1.03]"
                    : "border-border shadow-soft hover:-translate-y-1")
                }
              >
                {isOuro && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-soft">
                    ★ Mais popular
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <div className={"flex h-11 w-11 items-center justify-center rounded-2xl " + (isOuro ? "bg-gradient-brand text-white" : "bg-[hsl(var(--brand-blue))]/10 text-[hsl(var(--brand-blue))]")}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-none">{plan.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{plan.tagline}</p>
                  </div>
                </div>

                <p className="mt-6 text-3xl font-bold">
                  {plan.price}<span className="text-sm font-medium text-muted-foreground">/mês</span>
                </p>
                <p className="mt-1 text-sm text-[hsl(var(--brand-blue))]">Comissão {plan.commission}</p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm">
                      <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full " + (isOuro ? "bg-gradient-brand text-white" : "bg-[hsl(var(--brand-blue))]/10 text-[hsl(var(--brand-blue))]")}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/90">{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/"
                  className={
                    "mt-7 inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-all active:scale-[0.98] " +
                    (isOuro
                      ? "bg-gradient-brand text-white shadow-brand"
                      : "border border-border bg-card text-foreground hover:bg-secondary")
                  }
                >
                  {plan.cta}
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 rounded-[24px] border border-border bg-card p-6 shadow-soft md:grid-cols-2">
          <div>
            <h4 className="text-sm font-bold">Informações de entrega</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[hsl(var(--brand-blue))]" /> Produto 100% digital</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[hsl(var(--brand-blue))]" /> Acesso imediato após confirmação do pagamento</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[hsl(var(--brand-blue))]" /> Credenciais enviadas por e-mail</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[hsl(var(--brand-blue))]" /> Suporte para ativação via WhatsApp</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold">Suporte ao cliente</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><span className="font-semibold text-foreground">WhatsApp:</span> +55 32 98426-4682</li>
              <li><span className="font-semibold text-foreground">E-mail:</span> suporte@faanz.com.br</li>
              <li><span className="font-semibold text-foreground">Atendimento:</span> Segunda a sexta, 9h às 18h</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CALCULADORA */}
      <section id="calculadora" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid items-center gap-10 rounded-[32px] border border-border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-blue))]/20 bg-background px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))]">
              <BarChart3 className="h-3.5 w-3.5" /> Cálculo Real
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Quanto custa estar na liderança?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Essa é a pergunta certa. E a resposta é simples. Veja a simulação para o Plano Ouro com 3 vendas no mês.
            </p>
            <div className="mt-6 rounded-2xl bg-gradient-brand p-6 text-white shadow-brand">
              <p className="text-xs uppercase tracking-[0.18em] text-white/75">A perspectiva correta</p>
              <p className="mt-2 text-lg font-semibold leading-snug">
                Você não está pagando R$ 1.500. Você está investindo R$ 1.500 para ganhar R$ 40.500.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-border bg-background">
            <div className="border-b border-border bg-secondary/40 px-5 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Simulação · Plano Ouro · Comissão 4%
              </p>
            </div>
            <ul className="divide-y divide-border">
              {CALC_ROWS.map((r) => (
                <li key={r.label} className="flex items-center justify-between px-5 py-3.5 text-sm">
                  <span className="font-semibold text-foreground">{r.label}</span>
                  <span className="text-muted-foreground">{r.deal}</span>
                  <span className="font-semibold text-foreground">{r.commission}</span>
                </li>
              ))}
              <li className="flex items-center justify-between bg-secondary/30 px-5 py-3.5 text-sm">
                <span className="font-bold">Total de comissões</span>
                <span />
                <span className="font-bold">R$ 42.000</span>
              </li>
              <li className="flex items-center justify-between px-5 py-3 text-sm">
                <span className="text-muted-foreground">Menos custo do plano</span>
                <span />
                <span className="text-muted-foreground">- R$ 1.500</span>
              </li>
              <li className="flex items-center justify-between bg-[hsl(var(--brand-blue))]/8 px-5 py-4 text-base">
                <span className="font-bold text-[hsl(var(--brand-blue))]">Lucro líquido</span>
                <span />
                <span className="text-xl font-bold text-[hsl(var(--brand-blue))]">R$ 40.500</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-5 pb-24 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-blue))]/20 bg-card px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--brand-blue))] shadow-soft">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Dúvidas? Respondemos com clareza</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-1 shadow-soft">
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl px-4 py-4 text-left"
                  aria-expanded={open}
                >
                  <span className="text-sm font-semibold text-foreground">{f.q}</span>
                  <ChevronDown className={"h-4 w-4 shrink-0 text-[hsl(var(--brand-blue))] transition-transform " + (open ? "rotate-180" : "")} />
                </button>
                {open && <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="download" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-brand p-10 text-center text-white shadow-brand sm:p-14 lg:p-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sua mudança de vida está aqui — começa agora.</h2>
            <p className="mt-4 text-white/85">
              Você chegou até aqui porque sente que há mais possibilidade. Você sente que merece melhor.
              Não pense duas vezes. Não espere. Não deixe para depois.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#planos"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[hsl(var(--brand-blue))] shadow-soft transition-all hover:-translate-y-0.5"
              >
                Escolher meu plano <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
              >
                Já tenho conta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A plataforma oficial de corretagem imobiliária com a chancela Neymar. Conectamos corretores às melhores oportunidades do mercado.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-bold">Contato & Suporte</h5>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>+55 32 98426-4682</li>
              <li>suporte@faanz.com.br</li>
              <li>Seg a Sex · 9h às 18h</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold">Links úteis</h5>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#planos" className="hover:text-foreground">Planos e preços</a></li>
              <li><a href="#como-funciona" className="hover:text-foreground">Como funciona</a></li>
              <li><a href="#faq" className="hover:text-foreground">Perguntas frequentes</a></li>
              <li><a href="#" className="hover:text-foreground">Termos de uso</a></li>
              <li><a href="#" className="hover:text-foreground">Política de privacidade</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-bold">Siga a Faanz</h5>
            <div className="mt-4 flex gap-2">
              {[Instagram, Linkedin, Youtube, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-[hsl(var(--brand-blue))] hover:bg-[hsl(var(--brand-blue))]/10">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-muted-foreground lg:px-8">
            © 2026 Faanz. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
