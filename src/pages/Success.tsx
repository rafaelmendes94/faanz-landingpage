import Logo from "@/components/Logo";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BatteryFull,
  Calendar,
  Check,
  CircleDollarSign,
  FileText,
  Home as HomeIcon,
  MapPin,
  Signal,
  ShieldCheck,
  TrendingUp,
  Users,
  Wifi,
} from "lucide-react";
import propertyImg from "@/assets/property-1.jpg";

const Success = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-bg pb-10">
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-gradient-brand opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-gradient-brand opacity-10 blur-3xl" />

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

        {/* Logo */}
        <div className="mt-3 flex items-center justify-center">
          <Logo size="lg" />
        </div>

        {/* Success icon */}
        <div className="relative mt-8 flex items-center justify-center">
          {/* sparkles */}
          <span className="absolute left-6 top-2 h-1.5 w-1.5 rotate-45 bg-[hsl(var(--brand-blue-light))]/60" />
          <span className="absolute right-8 top-4 h-2 w-2 rotate-45 bg-[hsl(var(--brand-blue))]/40" />
          <span className="absolute left-12 bottom-2 h-1.5 w-1.5 rotate-45 bg-[hsl(var(--brand-blue))]/30" />
          <span className="absolute right-10 bottom-4 h-2 w-2 rotate-45 bg-[hsl(var(--brand-blue-light))]/50" />
          <span className="absolute right-20 top-0 h-1 w-1 rounded-full bg-[hsl(174_60%_55%)]/60" />
          <span className="absolute left-20 bottom-0 h-1 w-1 rounded-full bg-[hsl(174_60%_55%)]/50" />

          <div className="absolute h-44 w-44 rounded-full bg-gradient-brand opacity-20 blur-2xl" />
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-brand shadow-brand">
            <Check className="h-16 w-16 text-white" strokeWidth={3} />
          </div>
        </div>

        {/* Title */}
        <h1 className="mt-7 text-center text-3xl font-bold text-foreground">
          Investimento confirmado!
        </h1>
        <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
          Você acaba de adquirir 1 cota no projeto
          <br />
          <span className="font-bold text-[hsl(var(--brand-blue))]">Casa Térrea Jardins.</span>
        </p>

        {/* Summary card */}
        <section className="mt-6 rounded-3xl bg-card p-4 shadow-soft">
          <div className="flex items-center gap-4">
            <img
              src={propertyImg}
              alt="Casa Térrea Jardins"
              className="h-24 w-24 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0 flex-1">
              <h2 className="text-base font-bold text-foreground">Casa Térrea Jardins</h2>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                Campinas, SP
              </p>
              <span className="mt-2 inline-flex rounded-full bg-[hsl(var(--brand-blue))]/10 px-2.5 py-1 text-[11px] font-bold text-[hsl(var(--brand-blue))]">
                ID #A306
              </span>
            </div>
          </div>

          <div className="mt-4 border-t border-border" />

          <ul className="divide-y divide-border">
            <Row icon={Users} label="Cotas adquiridas" value="1 cota" />
            <Row icon={CircleDollarSign} label="Valor investido" value="R$ 8.500" bold />
            <Row
              icon={TrendingUp}
              label="Retorno estimado"
              value="12,8% a.a."
              valueClassName="text-[hsl(var(--brand-blue))] font-bold"
            />
            <Row icon={Calendar} label="Prazo estimado" value="12 meses" bold />
            <Row icon={FileText} label="Código da transação" value="#INV-2036" />
          </ul>
        </section>

        {/* Highlight message */}
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[hsl(var(--brand-blue))]/8 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]/15">
            <TrendingUp className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
          </div>
          <p className="text-xs leading-relaxed text-foreground/80">
            Agora você pode acompanhar a evolução do seu investimento em{" "}
            <span className="font-bold text-[hsl(var(--brand-blue))]">Meus Projetos.</span>
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={() => navigate("/home")}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 text-base font-bold text-white shadow-brand transition active:scale-[0.99]"
          >
            <BarChart3 className="h-5 w-5" />
            Ver meu investimento
            <ArrowRight className="ml-auto h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => navigate("/home")}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-[hsl(var(--brand-blue))]/40 bg-card text-base font-bold text-[hsl(var(--brand-blue))] transition active:scale-[0.99]"
          >
            <HomeIcon className="h-5 w-5" />
            Voltar para Home
          </button>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-[hsl(174_60%_45%)]" />
          Comprovante enviado para seu e-mail
        </div>
      </div>
    </main>
  );
};

function Row({
  icon: Icon,
  label,
  value,
  bold,
  valueClassName,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  bold?: boolean;
  valueClassName?: string;
}) {
  return (
    <li className="flex items-center gap-3 py-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]/10">
        <Icon className="h-4.5 w-4.5 text-[hsl(var(--brand-blue))]" />
      </div>
      <span className="flex-1 text-sm text-muted-foreground">{label}</span>
      <span
        className={
          valueClassName ?? (bold ? "text-sm font-bold text-foreground" : "text-sm text-foreground")
        }
      >
        {value}
      </span>
    </li>
  );
}

export default Success;
