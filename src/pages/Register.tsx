import Logo from "@/components/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BatteryFull,
  Building2,
  Eye,
  EyeOff,
  IdCard,
  Lock,
  Mail,
  MapPin,
  Phone,
  Signal,
  User,
  Wifi,
} from "lucide-react";

type FieldProps = {
  label: string;
  icon: React.ReactNode;
  type?: string;
  placeholder: string;
  rightSlot?: React.ReactNode;
};

const Field = ({ label, icon, type = "text", placeholder, rightSlot }: FieldProps) => (
  <div className="space-y-1.5">
    <label className="px-1 text-xs font-medium text-muted-foreground">{label}</label>
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-[hsl(var(--brand-blue))]">
        {icon}
      </div>
      <div className="relative flex-1">
        <input
          type={type}
          placeholder={placeholder}
          className="h-12 w-full rounded-[24px] border border-transparent bg-secondary/70 px-4 text-sm text-foreground placeholder:text-muted-foreground/70 transition-all focus:border-[hsl(var(--brand-blue))] focus:bg-card focus:outline-none focus:ring-4 focus:ring-[hsl(var(--brand-blue))]/15"
        />
        {rightSlot && (
          <div className="absolute inset-y-0 right-3 flex items-center text-muted-foreground">
            {rightSlot}
          </div>
        )}
      </div>
    </div>
  </div>
);

const Step = ({ n, label, state }: { n: number; label: string; state: "active" | "done" | "idle" }) => {
  const active = state === "active" || state === "done";
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={
          "flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-all " +
          (active
            ? "bg-gradient-brand text-white shadow-brand"
            : "border border-border bg-card text-muted-foreground")
        }
      >
        {n}
      </div>
      <span
        className={
          "text-[11px] font-medium " +
          (state === "active" ? "text-[hsl(var(--brand-blue))]" : "text-muted-foreground")
        }
      >
        {label}
      </span>
    </div>
  );
};

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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

        {/* Top bar */}
        <div className="mt-4 grid grid-cols-3 items-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex justify-center"><Logo size="sm" /></div>
          <span />
        </div>

        <h1 className="mt-4 text-center text-2xl font-bold tracking-tight text-foreground">
          Cadastro de Investidor
        </h1>

        {/* Stepper */}
        <div className="mt-6 flex items-end justify-between px-2">
          <Step n={1} label="Dados Pessoais" state="active" />
          <div className="mb-6 mx-2 h-0.5 flex-1 rounded-full bg-border">
            <div className="h-full w-1/2 rounded-full bg-gradient-brand" />
          </div>
          <Step n={2} label="Perfil Financeiro" state="idle" />
          <div className="mb-6 mx-2 h-0.5 flex-1 rounded-full bg-border" />
          <Step n={3} label="Confirmação" state="idle" />
        </div>

        {/* Card */}
        <section className="mt-6 rounded-[32px] bg-card p-6 shadow-soft">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-[hsl(var(--brand-blue))]">
              <User className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">Dados Pessoais</h3>
              <p className="text-xs text-muted-foreground">Preencha seus dados para continuar</p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <Field label="Nome completo" icon={<User className="h-5 w-5" />} placeholder="João Silva" />
            <Field label="Email" icon={<Mail className="h-5 w-5" />} type="email" placeholder="joao@email.com" />
            <Field
              label="Senha"
              icon={<Lock className="h-5 w-5" />}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-secondary"
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
            />
            <Field label="Telefone" icon={<Phone className="h-5 w-5" />} type="tel" placeholder="(11) 98765-4321" />
            <Field label="CPF" icon={<IdCard className="h-5 w-5" />} placeholder="000.000.000-00" />
            <Field label="Cidade" icon={<Building2 className="h-5 w-5" />} placeholder="São Paulo" />
            <Field label="Estado" icon={<MapPin className="h-5 w-5" />} placeholder="SP" />
          </div>
        </section>

        {/* Actions — same pattern as login */}
        <div className="mt-8 space-y-3">
          <button
            type="button"
            className="group flex h-16 w-full items-center justify-center gap-2 rounded-[32px] bg-gradient-brand px-6 text-base font-semibold text-white shadow-brand transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Continuar
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex h-16 w-full items-center justify-center gap-2 rounded-[32px] border border-border bg-card text-base font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5"
          >
            Voltar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Register;
