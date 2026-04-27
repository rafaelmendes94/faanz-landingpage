import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Crown, Sparkles, Star } from "lucide-react";
import BottomNav from "@/components/BottomNav";

type Plan = {
  id: string;
  name: string;
  price: string;
  benefits: string[];
  cta: string;
  highlight?: boolean;
  icon: typeof Star;
};

const PLANS: Plan[] = [
  {
    id: "bronze",
    name: "Bronze",
    price: "R$ 500",
    icon: Star,
    benefits: [
      "5% de deságio na compra",
      "Acesso ao marketplace",
      "Relatórios mensais",
      "Participação no ranking",
    ],
    cta: "Assinar Bronze",
  },
  {
    id: "prata",
    name: "Prata",
    price: "R$ 1.000",
    icon: Sparkles,
    benefits: [
      "Tudo do Bronze",
      "10% de deságio",
      "Relatórios semanais",
      "Acesso antecipado a lançamentos",
      "Badge exclusiva",
    ],
    cta: "Assinar Prata",
  },
  {
    id: "ouro",
    name: "Ouro",
    price: "R$ 1.500",
    icon: Crown,
    highlight: true,
    benefits: [
      "Tudo do Prata",
      "15% de deságio",
      "Prioridade em investimentos",
      "Suporte premium",
      "Acesso VIP",
    ],
    cta: "Assinar Ouro",
  },
];

const Planos = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[image:var(--gradient-bg)] pb-32">
      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-6 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl bg-card shadow-soft border border-border"
          aria-label="Voltar"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <span className="text-xs font-medium text-muted-foreground">Assinatura</span>
        <div className="h-11 w-11" />
      </header>

      <div className="px-5">
        <h1 className="text-[26px] font-bold leading-tight text-foreground">
          Escolha seu plano
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Potencialize seus ganhos com benefícios exclusivos
        </p>
      </div>

      {/* Highlight banner */}
      <div className="mx-5 mt-5 rounded-[28px] border border-[hsl(var(--brand-blue))]/15 bg-gradient-to-br from-[hsl(var(--brand-blue-light))]/15 via-[hsl(var(--brand-blue))]/10 to-[hsl(var(--brand-blue-light))]/15 p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-card shadow-soft">
            <Sparkles className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Quanto maior o plano, maiores seus benefícios
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Desbloqueie deságio, prioridade e suporte premium.
            </p>
          </div>
        </div>
      </div>

      {/* Plans */}
      <div className="mt-6 space-y-4 px-5">
        {PLANS.map((plan) => {
          const Icon = plan.icon;
          const isOuro = plan.highlight;
          return (
            <article
              key={plan.id}
              className={
                "relative rounded-[32px] border bg-card p-6 transition-all " +
                (isOuro
                  ? "border-[hsl(var(--brand-blue))]/30 shadow-[var(--shadow-brand)] scale-[1.01]"
                  : "border-border shadow-soft")
              }
            >
              {isOuro && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[image:var(--gradient-brand)] px-3.5 py-1 text-[11px] font-semibold tracking-wide text-[hsl(var(--brand-foreground))] shadow-soft">
                    ★ Mais popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={
                      "flex h-12 w-12 items-center justify-center rounded-2xl " +
                      (isOuro
                        ? "bg-[image:var(--gradient-brand)] text-[hsl(var(--brand-foreground))]"
                        : "bg-[hsl(var(--brand-blue))]/10 text-[hsl(var(--brand-blue))]")
                    }
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{plan.name}</h2>
                    <p className="text-xs text-muted-foreground">Plano {plan.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-foreground">{plan.price}</p>
                  <p className="text-[11px] text-muted-foreground">/ mês</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5">
                {plan.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      className={
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full " +
                        (isOuro
                          ? "bg-[hsl(var(--brand-blue))] text-[hsl(var(--brand-foreground))]"
                          : "bg-[hsl(var(--brand-blue))]/12 text-[hsl(var(--brand-blue))]")
                      }
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>

              <button
                className={
                  "mt-6 w-full rounded-full py-3.5 text-sm font-semibold transition-all active:scale-[0.98] " +
                  (isOuro
                    ? "bg-[image:var(--gradient-brand)] text-[hsl(var(--brand-foreground))] shadow-[var(--shadow-brand)]"
                    : "bg-[image:var(--gradient-brand)] text-[hsl(var(--brand-foreground))] shadow-soft")
                }
              >
                {plan.cta}
              </button>
            </article>
          );
        })}
      </div>

      {/* Footer note */}
      <p className="mt-6 px-8 text-center text-[11px] text-muted-foreground">
        Cancele quando quiser. Pagamento seguro e criptografado.
      </p>

      <BottomNav />
    </div>
  );
};

export default Planos;
