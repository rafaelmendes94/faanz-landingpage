import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BatteryFull,
  Building2,
  Check,
  ChevronRight,
  Lock,
  MapPin,
  Minus,
  Plus,
  Shield,
  Signal,
  TrendingUp,
  Wallet,
  Wifi,
} from "lucide-react";
import { Slider } from "@/components/ui/slider";
import propertyImg from "@/assets/property-1.jpg";

const PRICE_PER_COTA = 8500;
const ANNUAL_YIELD = 0.128;
const MAX_COTAS = 100;

type PaymentId = "pix" | "transferencia" | "saldo";

const PAYMENTS: {
  id: PaymentId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  hint: string;
}[] = [
  { id: "pix", label: "Pix", icon: PixIcon, badge: "Recomendado", hint: "Aprovação imediata" },
  { id: "transferencia", label: "Transferência", icon: Building2, hint: "Compensação em até 1 dia útil" },
  { id: "saldo", label: "Saldo na plataforma", icon: Wallet, hint: "Saldo disponível R$ 2.300,00" },
];

function PixIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? "h-7 w-7"} fill="none">
      <path
        d="M12 2.5l4.2 4.2a3 3 0 0 1 0 4.2L12 15.1l-4.2-4.2a3 3 0 0 1 0-4.2L12 2.5z"
        fill="hsl(174 70% 50%)"
      />
      <path
        d="M12 21.5l-4.2-4.2a3 3 0 0 1 0-4.2L12 8.9l4.2 4.2a3 3 0 0 1 0 4.2L12 21.5z"
        fill="hsl(174 70% 45%)"
      />
      <path
        d="M2.5 12l4.2-4.2a3 3 0 0 1 4.2 0L15.1 12l-4.2 4.2a3 3 0 0 1-4.2 0L2.5 12z"
        fill="hsl(174 70% 55%)"
      />
    </svg>
  );
}

const fmtBRL = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

const Checkout = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cotas, setCotas] = useState(1);
  const [payment, setPayment] = useState<PaymentId>("pix");

  const total = useMemo(() => cotas * PRICE_PER_COTA, [cotas]);
  const estimatedReturn = useMemo(() => Math.round(total * (1 + ANNUAL_YIELD)), [total]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-bg pb-32">
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-gradient-brand opacity-10 blur-3xl" />

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
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Voltar"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-card shadow-soft"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-center text-lg font-bold text-foreground">Investir</h1>
          <span />
        </div>

        {/* Stepper */}
        <div className="mt-6 flex items-center">
          {[
            { n: 1, label: "Investimento" },
            { n: 2, label: "Pagamento" },
            { n: 3, label: "Confirmação" },
          ].map((s, i, arr) => {
            const active = s.n === 1;
            return (
              <div key={s.n} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <div
                    className={
                      "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold " +
                      (active
                        ? "bg-[hsl(var(--brand-blue))] text-white shadow-brand"
                        : "bg-secondary text-muted-foreground")
                    }
                  >
                    {s.n}
                  </div>
                  <span
                    className={
                      "mt-1.5 text-[10px] font-semibold " +
                      (active ? "text-[hsl(var(--brand-blue))]" : "text-muted-foreground")
                    }
                  >
                    {s.label}
                  </span>
                </div>
                {i < arr.length - 1 && <div className="mx-1 mb-5 h-px flex-1 bg-border" />}
              </div>
            );
          })}
        </div>

        {/* Property summary */}
        <section className="mt-5 rounded-3xl bg-card p-3 shadow-soft">
          <div className="flex items-center gap-3">
            <img
              src={propertyImg}
              alt="Casa Térrea Jardins"
              className="h-20 w-20 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0 flex-1">
              <h2 className="truncate text-base font-bold text-foreground">Casa Térrea Jardins</h2>
              <p className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-[hsl(var(--brand-blue))]">
                <MapPin className="h-3 w-3" />
                Campinas, SP
              </p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 divide-x divide-border rounded-2xl bg-secondary/40 py-2 text-center">
            <div>
              <p className="text-[10px] text-muted-foreground">ID</p>
              <p className="text-xs font-bold text-foreground">#A{id ?? "306"}</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">Captação</p>
              <p className="text-xs font-bold text-[hsl(var(--brand-blue))]">65%</p>
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground">Aporte mín.</p>
              <p className="text-xs font-bold text-foreground">R$ 8.500</p>
            </div>
          </div>
        </section>

        {/* Investment selector */}
        <section className="mt-6">
          <h3 className="text-lg font-bold text-foreground">Quanto você deseja investir?</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">Selecione a quantidade de cotas</p>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setCotas((c) => Math.max(1, c - 1))}
              aria-label="Diminuir"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition active:scale-95 disabled:opacity-40"
              disabled={cotas <= 1}
            >
              <Minus className="h-5 w-5" />
            </button>
            <div className="flex h-14 min-w-[140px] items-center justify-center rounded-2xl border border-border bg-card px-6 shadow-soft">
              <span className="text-lg font-bold text-foreground">
                {cotas} <span className="font-semibold text-muted-foreground">{cotas === 1 ? "cota" : "cotas"}</span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setCotas((c) => Math.min(MAX_COTAS, c + 1))}
              aria-label="Aumentar"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition active:scale-95"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-3 text-center text-2xl font-bold text-[hsl(var(--brand-blue))]">{fmtBRL(total)}</p>

          <div className="mt-5">
            <Slider
              value={[cotas]}
              min={1}
              max={MAX_COTAS}
              step={1}
              onValueChange={(v) => setCotas(v[0] ?? 1)}
              className="[&_[role=slider]]:h-5 [&_[role=slider]]:w-5 [&_[role=slider]]:border-[hsl(var(--brand-blue))] [&_[role=slider]]:bg-white [&_[role=slider]]:shadow-brand [&>span:first-child]:h-2 [&>span:first-child]:bg-secondary [&>span:first-child>span]:bg-[hsl(var(--brand-blue))]"
            />
            <div className="mt-2 flex justify-between text-[11px] font-medium text-muted-foreground">
              <span>1 cota</span>
              <span>{MAX_COTAS} cotas</span>
            </div>
          </div>
        </section>

        {/* Total */}
        <section className="mt-5 flex items-center justify-between rounded-2xl bg-card px-5 py-4 shadow-soft">
          <span className="text-sm font-bold text-foreground">Valor total</span>
          <span className="text-xl font-bold text-[hsl(var(--brand-blue))]">{fmtBRL(total)}</span>
        </section>

        {/* Estimated return */}
        <section className="mt-3 flex items-center gap-3 rounded-2xl bg-[hsl(var(--brand-blue))]/8 p-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]/15">
            <TrendingUp className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[11px] text-muted-foreground">Retorno estimado</p>
            <p className="text-base font-bold text-[hsl(var(--brand-blue))]">
              {fmtBRL(estimatedReturn)} em 12 meses
            </p>
            <p className="text-[10px] text-muted-foreground">Baseado em 12,8% a.a.</p>
          </div>
          <ChevronRight className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
        </section>

        {/* Payment */}
        <section className="mt-6">
          <h3 className="text-base font-bold text-foreground">Forma de pagamento</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">Escolha como deseja realizar o pagamento</p>

          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {PAYMENTS.map((p) => {
              const active = payment === p.id;
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPayment(p.id)}
                  className={
                    "relative flex flex-col items-center gap-1.5 rounded-2xl border-2 bg-card p-3 text-center transition-all " +
                    (active
                      ? "border-[hsl(var(--brand-blue))] shadow-soft"
                      : "border-transparent shadow-soft hover:-translate-y-0.5")
                  }
                >
                  {active && (
                    <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]">
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                    </span>
                  )}
                  <div className="flex h-9 items-center justify-center">
                    <Icon className="h-6 w-6 text-[hsl(var(--brand-blue))]" />
                  </div>
                  <p className="text-xs font-bold text-foreground">{p.label}</p>
                  {p.badge && (
                    <span className="rounded-full bg-[hsl(var(--brand-blue))]/12 px-2 py-0.5 text-[9px] font-semibold text-[hsl(var(--brand-blue))]">
                      {p.badge}
                    </span>
                  )}
                  <p className="text-[10px] leading-tight text-muted-foreground">{p.hint}</p>
                </button>
              );
            })}
          </div>
        </section>

        {/* Security */}
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[hsl(var(--brand-blue))]/8 p-3">
          <Shield className="h-5 w-5 shrink-0 text-[hsl(var(--brand-blue))]" />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-foreground">Transação segura e protegida</p>
            <p className="text-[10px] text-muted-foreground">
              Seus dados e investimentos estão 100% protegidos.
            </p>
          </div>
          <Lock className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
        </div>
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-1/2 z-20 w-full max-w-md -translate-x-1/2 rounded-t-[28px] border-t border-border bg-card/95 px-6 pb-6 pt-4 backdrop-blur">
        <button
          type="button"
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 text-base font-bold text-white shadow-brand transition active:scale-[0.99]"
        >
          <Lock className="h-4 w-4" />
          Confirmar investimento
          <ArrowRight className="ml-auto h-5 w-5" />
        </button>
      </div>
    </main>
  );
};

export default Checkout;
