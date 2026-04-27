import Logo from "@/components/Logo";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Bell,
  BellRing,
  DollarSign,
  FileText,
  Gift,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";

type Category = "investimentos" | "sistema";
type Tone = "blue" | "teal" | "indigo" | "amber";

type Notif = {
  id: string;
  icon: LucideIcon;
  tone: Tone;
  title: string;
  text: string;
  time: string;
  category: Category;
  unread?: boolean;
  badge?: string;
};

const NOTIFS: Notif[] = [
  {
    id: "1",
    icon: TrendingUp,
    tone: "blue",
    title: "Novo update no seu investimento",
    text: "A obra do projeto Casa Jardins avançou para 75%",
    time: "há 2 horas",
    category: "investimentos",
    unread: true,
    badge: "Novo",
  },
  {
    id: "2",
    icon: DollarSign,
    tone: "teal",
    title: "Retorno atualizado",
    text: "Seu investimento teve atualização de rentabilidade",
    time: "há 1 dia",
    category: "investimentos",
    unread: true,
  },
  {
    id: "3",
    icon: Gift,
    tone: "indigo",
    title: "Bônus liberado",
    text: "Você ganhou R$ 150 em bonificação",
    time: "há 3 dias",
    category: "sistema",
    unread: true,
  },
  {
    id: "4",
    icon: BellRing,
    tone: "amber",
    title: "Nova oportunidade disponível",
    text: "Um novo projeto foi liberado para investimento",
    time: "há 5 dias",
    category: "investimentos",
  },
  {
    id: "5",
    icon: ShieldCheck,
    tone: "teal",
    title: "Verificação concluída",
    text: "Sua conta foi verificada com sucesso",
    time: "há 6 dias",
    category: "sistema",
  },
  {
    id: "6",
    icon: FileText,
    tone: "blue",
    title: "Relatório mensal disponível",
    text: "Seu relatório de investimentos de abril está pronto",
    time: "há 1 semana",
    category: "investimentos",
  },
];

const TONE: Record<Tone, { bg: string; ring: string; icon: string }> = {
  blue: {
    bg: "bg-[hsl(var(--brand-blue))]",
    ring: "ring-[hsl(var(--brand-blue))]/15",
    icon: "text-white",
  },
  teal: {
    bg: "bg-[hsl(174_72%_45%)]",
    ring: "ring-[hsl(174_72%_45%)]/15",
    icon: "text-white",
  },
  indigo: {
    bg: "bg-[hsl(232_75%_60%)]",
    ring: "ring-[hsl(232_75%_60%)]/15",
    icon: "text-white",
  },
  amber: {
    bg: "bg-[hsl(32_95%_58%)]",
    ring: "ring-[hsl(32_95%_58%)]/15",
    icon: "text-white",
  },
};

const TABS = [
  { id: "todas", label: "Todas" },
  { id: "investimentos", label: "Investimentos" },
  { id: "sistema", label: "Sistema" },
] as const;
type TabId = (typeof TABS)[number]["id"];

const Notificacoes = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabId>("todas");
  const [items, setItems] = useState<Notif[]>(NOTIFS);

  const filtered = useMemo(
    () => (tab === "todas" ? items : items.filter((n) => n.category === tab)),
    [items, tab],
  );
  const unreadCount = items.filter((n) => n.unread).length;

  const markAllRead = () =>
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })));

  return (
    <div className="min-h-screen bg-[image:var(--gradient-bg)] pb-32">
      {/* Header */}
      <header className="px-5 pt-6">
        <div className="relative flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            aria-label="Voltar"
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card shadow-soft"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Logo size="sm" />
          </div>
          <button
            onClick={markAllRead}
            className="text-xs font-semibold text-[hsl(var(--brand-blue))]"
          >
            Marcar todas como lidas
          </button>
        </div>

        <h1 className="mt-5 text-3xl font-bold text-foreground">
          Notificações
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Fique por dentro de tudo que acontece nos seus investimentos.
        </p>
      </header>

      {/* Tabs */}
      <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto px-5">
        {TABS.map(({ id, label }) => {
          const active = tab === id;
          const showBadge = id === "todas" && unreadCount > 0;
          return (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={
                "flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all " +
                (active
                  ? "bg-[image:var(--gradient-brand)] text-white shadow-brand"
                  : "bg-secondary text-muted-foreground")
              }
            >
              {label}
              {showBadge && (
                <span
                  className={
                    "grid h-5 min-w-5 place-items-center rounded-full px-1.5 text-[10px] font-bold " +
                    (active
                      ? "bg-[hsl(var(--brand-blue-deep))] text-white"
                      : "bg-[hsl(var(--brand-blue))] text-white")
                  }
                >
                  {unreadCount}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* List */}
      <section className="mt-4 space-y-3 px-5">
        {filtered.length === 0 ? (
          <EmptyState />
        ) : (
          filtered.map((n) => <NotifItem key={n.id} n={n} />)
        )}
      </section>

      {/* Activate notifications card */}
      {filtered.length > 0 && (
        <section className="mt-5 px-5">
          <div className="flex items-center gap-4 rounded-[24px] bg-[hsl(var(--brand-blue))]/8 p-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[hsl(var(--brand-blue))]/15">
              <BellRing className="h-7 w-7 text-[hsl(var(--brand-blue))]" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground">
                Ative as notificações
              </p>
              <p className="text-xs text-muted-foreground">
                Assim você não perde nenhuma novidade sobre seus investimentos.
              </p>
            </div>
            <button className="shrink-0 rounded-full border border-[hsl(var(--brand-blue))]/40 px-4 py-2 text-xs font-semibold text-[hsl(var(--brand-blue))]">
              Ativar agora
            </button>
          </div>
        </section>
      )}

      <BottomNav />
    </div>
  );
};

/* ---------- Local components ---------- */

function NotifItem({ n }: { n: Notif }) {
  const tone = TONE[n.tone];
  const Icon = n.icon;
  return (
    <article
      className={
        "relative flex gap-3 rounded-[24px] border p-4 transition-colors " +
        (n.unread
          ? "border-[hsl(var(--brand-blue))]/20 bg-[hsl(var(--brand-blue))]/6"
          : "border-border bg-card shadow-soft")
      }
    >
      {n.unread && (
        <span
          aria-hidden
          className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[hsl(var(--brand-blue))]"
        />
      )}
      <div
        className={
          "grid h-12 w-12 shrink-0 place-items-center rounded-full ring-8 " +
          tone.bg +
          " " +
          tone.ring
        }
      >
        <Icon className={"h-5 w-5 " + tone.icon} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold leading-snug text-foreground">
            {n.title}
          </h3>
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="text-[11px] text-muted-foreground">{n.time}</span>
            {n.unread && (
              <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand-blue))]" />
            )}
          </div>
        </div>
        <p className="mt-1 text-xs leading-snug text-muted-foreground">
          {n.text}
        </p>
        {n.badge && (
          <span className="mt-2 inline-block rounded-full bg-[hsl(var(--brand-blue))]/12 px-2.5 py-1 text-[10px] font-semibold text-[hsl(var(--brand-blue))]">
            {n.badge}
          </span>
        )}
      </div>
    </article>
  );
}

function EmptyState() {
  return (
    <div className="rounded-[28px] border border-border bg-card p-10 text-center shadow-soft">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[hsl(var(--brand-blue))]/10">
        <Bell className="h-7 w-7 text-[hsl(var(--brand-blue))]" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">
        Nenhuma notificação ainda
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Você será avisado sobre novidades e atualizações.
      </p>
    </div>
  );
}

export default Notificacoes;
