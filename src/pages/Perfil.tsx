import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  BarChart3,
  BatteryFull,
  Bell,
  Camera,
  ChevronRight,
  Gift,
  HelpCircle,
  Landmark,
  LogOut,
  Lock,
  Shield,
  Signal,
  Star,
  TrendingUp,
  Trophy,
  User,
  UserCircle2,
  Users,
  Wallet,
  Wifi,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";
import avatar from "@/assets/profile-user.jpg";

type Shortcut = { icon: typeof Wallet; label: string; to: string };
type SettingItem = {
  icon: typeof User;
  title: string;
  subtitle: string;
  to: string;
};

const SHORTCUTS: Shortcut[] = [
  { icon: Star, label: "Planos", to: "/planos" },
  { icon: BarChart3, label: "Meus projetos", to: "/projetos" },
  { icon: Gift, label: "Bonificações", to: "/bonificacao" },
  { icon: Users, label: "Indique e ganhe", to: "/indique" },
];

const SETTINGS: SettingItem[] = [
  {
    icon: User,
    title: "Dados pessoais",
    subtitle: "Nome, e-mail, telefone e documentos",
    to: "#",
  },
  {
    icon: Shield,
    title: "Segurança",
    subtitle: "Senha, biometria e autenticação",
    to: "#",
  },
  {
    icon: Bell,
    title: "Notificações",
    subtitle: "Gerencie seus alertas e preferências",
    to: "/notificacoes",
  },
  {
    icon: Lock,
    title: "Privacidade",
    subtitle: "Como seus dados são usados",
    to: "#",
  },
  {
    icon: Landmark,
    title: "Conta bancária",
    subtitle: "Gerencie suas contas para saques e depósitos",
    to: "#",
  },
  {
    icon: HelpCircle,
    title: "Central de ajuda",
    subtitle: "Suporte, dúvidas frequentes e contato",
    to: "/suporte",
  },
];

const Perfil = () => {
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

        {/* Logo + bell */}
        <div className="mt-3 grid grid-cols-3 items-center">
          <span />
          <div className="flex justify-center"><Logo size="sm" /></div>
          <Link
            to="/notificacoes"
            aria-label="Notificações"
            className="ml-auto relative flex h-10 w-10 items-center justify-center rounded-full bg-card shadow-soft active:scale-95"
          >
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[hsl(var(--brand-blue))] ring-2 ring-card" />
          </Link>
        </div>

        {/* Title */}
        <section className="mt-4">
          <h1 className="text-3xl font-bold text-foreground">Perfil</h1>
          <p className="mt-1 text-sm leading-snug text-muted-foreground">
            Gerencie suas informações e preferências do app
          </p>
        </section>

        {/* User card */}
        <section className="mt-5 overflow-hidden rounded-3xl bg-gradient-brand p-5 text-white shadow-brand">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <img
                src={avatar}
                alt="Foto de Ronaldo Oliveira"
                width={88}
                height={88}
                className="h-20 w-20 rounded-full object-cover ring-4 ring-white/25"
              />
              <button
                type="button"
                aria-label="Editar foto"
                className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[hsl(var(--brand-blue))] shadow-soft active:scale-95"
              >
                <Camera className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg font-bold leading-tight">
                Ronaldo Oliveira
              </p>
              <p className="mt-0.5 inline-flex items-center gap-1 truncate text-xs text-white/85">
                ronaldo.oliveira@email.com
                <BadgeCheck className="h-3.5 w-3.5 shrink-0" />
              </p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[hsl(222_47%_11%)]/40 px-2.5 py-1 text-[11px] font-bold text-[hsl(45_95%_70%)] backdrop-blur">
                <Star className="h-3 w-3 fill-current" />
                Investidor Ouro
              </span>
            </div>
            <ChevronRight className="h-5 w-5 shrink-0 text-white/80" />
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-4 gap-1 rounded-2xl bg-white/10 p-3 backdrop-blur">
            <Stat icon={Wallet} label="Total investido" value="R$ 125.000" />
            <Stat
              icon={TrendingUp}
              label="Rentabilidade"
              value="+12,8%"
              sub="este ano"
            />
            <Stat icon={UserCircle2} label="Total ganho" value="R$ 15.600" />
            <Stat
              icon={Trophy}
              label="Ranking"
              value="#23"
              sub="entre amigos"
            />
          </div>
        </section>

        {/* Quick actions */}
        <section className="mt-5 rounded-3xl bg-card p-5 shadow-soft">
          <p className="text-sm font-bold text-foreground">Atalhos rápidos</p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {SHORTCUTS.map(({ icon: Icon, label, to }) => (
              <Link
                key={label}
                to={to}
                className="flex flex-col items-center gap-2 text-center active:scale-95"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--brand-blue))]/10">
                  <Icon className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
                </span>
                <span className="text-[11px] leading-tight text-muted-foreground">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Settings */}
        <section className="mt-5 rounded-3xl bg-card p-3 shadow-soft">
          <p className="px-2 pb-1 pt-2 text-sm font-bold text-foreground">
            Configurações
          </p>
          <ul className="divide-y divide-border">
            {SETTINGS.map(({ icon: Icon, title, subtitle, to }) => (
              <li key={title}>
                <Link
                  to={to}
                  className="flex items-center gap-3 rounded-2xl px-2 py-3 transition active:bg-secondary/60"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--brand-blue))]/10">
                    <Icon className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-foreground">
                      {title}
                    </p>
                    <p className="truncate text-[11px] text-muted-foreground">
                      {subtitle}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Logout */}
        <button
          type="button"
          className="mt-4 flex w-full items-center gap-3 rounded-3xl border border-[hsl(var(--destructive))]/20 bg-card p-4 shadow-soft transition active:scale-[0.99]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[hsl(var(--destructive))]/10">
            <LogOut className="h-5 w-5 text-[hsl(var(--destructive))]" />
          </span>
          <span className="flex-1 text-left text-sm font-bold text-[hsl(var(--destructive))]">
            Sair da conta
          </span>
          <ChevronRight className="h-4 w-4 text-[hsl(var(--destructive))]/70" />
        </button>

        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Versão 1.0.0
        </p>
      </div>

      <BottomNav />
    </main>
  );
};

function Stat({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 px-1 text-center">
      <Icon className="h-4 w-4 text-white/85" />
      <p className="text-[10px] leading-tight text-white/80">{label}</p>
      <p className="text-xs font-bold leading-tight text-white">{value}</p>
      {sub && <p className="text-[9px] leading-tight text-white/70">{sub}</p>}
    </div>
  );
}

export default Perfil;
