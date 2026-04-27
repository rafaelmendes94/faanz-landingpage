import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  BarChart3,
  BatteryFull,
  Bookmark,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock,
  Download,
  FileText,
  Folder,
  Headphones,
  Info,
  ListChecks,
  MapPin,
  PieChart,
  ScrollText,
  Share2,
  Signal,
  TrendingUp,
  Users,
  Wifi,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";
import hero from "@/assets/property-detail-hero.jpg";
import upd1 from "@/assets/property-2.jpg";
import upd2 from "@/assets/property-3.jpg";
import upd3 from "@/assets/property-4.jpg";
import upd4 from "@/assets/property-5.jpg";
import upd5 from "@/assets/property-6.jpg";
import upd6 from "@/assets/building.jpg";

type TabId = "updates" | "documentos" | "detalhes" | "progresso";

const TABS: { id: TabId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: "updates", label: "Updates", icon: ScrollText },
  { id: "documentos", label: "Documentos", icon: Folder },
  { id: "detalhes", label: "Detalhes", icon: Info },
  { id: "progresso", label: "Progresso", icon: BarChart3 },
];

const ProjectDetail = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<TabId>("updates");

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-bg pb-40">
      {/* Hero */}
      <div className="relative h-[320px] w-full">
        <img src={hero} alt="Casa Térrea Jardins" className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />

        {/* Status bar */}
        <header className="absolute inset-x-0 top-0 mx-auto flex w-full max-w-md items-center justify-between px-6 pt-4 text-xs font-semibold text-white">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <Signal className="h-3.5 w-3.5" />
            <Wifi className="h-3.5 w-3.5" />
            <BatteryFull className="h-4 w-4" />
          </div>
        </header>

        {/* Top buttons */}
        <div className="absolute inset-x-0 top-12 mx-auto flex w-full max-w-md items-center justify-between px-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Voltar"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Salvar"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft"
            >
              <Bookmark className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
            </button>
            <button
              type="button"
              aria-label="Compartilhar"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft"
            >
              <Share2 className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-md px-6">
        {/* Floating project card */}
        <section className="-mt-20 rounded-3xl bg-card p-5 shadow-soft">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-foreground">Casa Térrea Jardins</h1>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                Campinas, SP
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-[hsl(var(--brand-blue))]/10 px-3 py-1.5 text-xs font-bold text-[hsl(var(--brand-blue))]">
              ID #A306
            </span>
          </div>

          {/* Progress */}
          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-[hsl(var(--brand-blue))]">65% completo</p>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Última atualização há 2 dias
                </span>
                <span className="rounded-full bg-[hsl(150_60%_45%)]/15 px-2 py-0.5 text-[10px] font-bold text-[hsl(150_60%_35%)]">
                  Novo update
                </span>
              </div>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-gradient-brand" style={{ width: "65%" }} />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-5 grid grid-cols-3 divide-x divide-border">
            <Stat icon={CircleDollarSign} label="Investido por você" value="R$ 42.500" />
            <Stat
              icon={TrendingUp}
              label="Retorno projetado"
              value="12,8% a.a."
              valueClassName="text-[hsl(var(--brand-blue))]"
            />
            <Stat icon={PieChart} label="Sua participação" value="5 cotas (5%)" />
          </div>
        </section>

        {/* Tabs */}
        <div className="mt-6 grid grid-cols-4 border-b border-border">
          {TABS.map((t) => {
            const active = t.id === tab;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={
                  "relative flex flex-col items-center gap-1.5 pb-3 pt-1 text-xs font-semibold transition-colors " +
                  (active ? "text-[hsl(var(--brand-blue))]" : "text-muted-foreground")
                }
              >
                <Icon className="h-5 w-5" />
                {t.label}
                {active && (
                  <span className="absolute -bottom-px left-1/2 h-0.5 w-12 -translate-x-1/2 rounded-full bg-[hsl(var(--brand-blue))]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        {tab === "updates" && <UpdatesTab />}
        {tab === "documentos" && <DocumentosTab />}
        {tab === "detalhes" && <DetalhesTab />}
        {tab === "progresso" && <ProgressoTab />}
      </div>

      {/* Fixed CTA */}
      <div className="fixed bottom-24 left-1/2 z-20 w-full max-w-md -translate-x-1/2 px-6">
        <button
          type="button"
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-[hsl(var(--brand-blue))] bg-card text-base font-bold text-[hsl(var(--brand-blue))] shadow-soft transition active:scale-[0.99]"
        >
          <Headphones className="h-5 w-5" />
          Falar com suporte
        </button>
      </div>

      <BottomNav />
    </main>
  );
};

function Stat({
  icon: Icon,
  label,
  value,
  valueClassName,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  valueClassName?: string;
}) {
  return (
    <div className="flex items-start gap-2 px-2 first:pl-0 last:pr-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]/10">
        <Icon className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] text-muted-foreground">{label}</p>
        <p className={"text-sm font-bold text-foreground " + (valueClassName ?? "")}>{value}</p>
      </div>
    </div>
  );
}

/* ===================== UPDATES ===================== */

const UPDATES = [
  {
    id: 1,
    icon: Users,
    title: "Obra iniciada",
    date: "23 abr 2026",
    description: "A obra foi iniciada conforme cronograma.",
    images: [upd1, upd2, upd3],
    badge: true,
    completed: true,
    open: true,
  },
  {
    id: 2,
    icon: Building2,
    title: "Fundação concluída",
    date: "02 mai 2026",
    description: "Finalizamos a etapa de fundação.",
    images: [upd4, upd5, upd6],
    completed: true,
    open: true,
  },
  {
    id: 3,
    icon: Building2,
    title: "Estrutura em andamento",
    date: "Em andamento",
    description: "Execução da estrutura conforme planejamento.",
    images: [],
    completed: false,
    open: false,
  },
];

function UpdatesTab() {
  return (
    <section className="mt-6">
      <h3 className="text-base font-bold text-foreground">Linha do tempo</h3>
      <ol className="relative mt-4 space-y-4">
        {/* vertical line */}
        <span className="absolute left-3 top-2 bottom-2 w-px bg-border" aria-hidden />
        {UPDATES.map((u) => {
          const Icon = u.icon;
          return (
            <li key={u.id} className="relative pl-10">
              <span
                className={
                  "absolute left-0 top-3 flex h-6 w-6 items-center justify-center rounded-full " +
                  (u.completed
                    ? "bg-[hsl(var(--brand-blue))] text-white"
                    : "border-2 border-border bg-card text-muted-foreground")
                }
              >
                {u.completed ? (
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                ) : (
                  <ChevronDown className="h-3 w-3" />
                )}
              </span>

              <div className="rounded-3xl bg-card p-4 shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]/10">
                    <Icon className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-base font-bold text-foreground">{u.title}</h4>
                      {u.badge ? (
                        <span className="shrink-0 rounded-full bg-[hsl(150_60%_45%)]/15 px-2 py-0.5 text-[10px] font-bold text-[hsl(150_60%_35%)]">
                          Novo update
                        </span>
                      ) : (
                        <ChevronDown
                          className={
                            "h-4 w-4 shrink-0 text-[hsl(var(--brand-blue))] transition-transform " +
                            (u.open ? "" : "-rotate-90")
                          }
                        />
                      )}
                    </div>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {u.date}
                    </p>
                    {u.open && (
                      <>
                        <p className="mt-2 text-sm text-foreground/80">{u.description}</p>
                        {u.images.length > 0 && (
                          <div className="mt-3 grid grid-cols-3 gap-2">
                            {u.images.map((img, idx) => (
                              <img
                                key={idx}
                                src={img}
                                alt={`${u.title} ${idx + 1}`}
                                className="h-20 w-full rounded-xl object-cover"
                              />
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

/* ===================== DOCUMENTOS ===================== */

const DOCS = [
  { icon: FileText, title: "Contrato de investimento", size: "PDF · 320 KB" },
  { icon: ScrollText, title: "Escritura do imóvel", size: "PDF · 1.2 MB" },
  { icon: BarChart3, title: "Relatório financeiro Q1", size: "PDF · 480 KB" },
  { icon: BarChart3, title: "Relatório de obra", size: "PDF · 2.1 MB" },
];

function DocumentosTab() {
  return (
    <section className="mt-6">
      <h3 className="text-base font-bold text-foreground">Documentos</h3>
      <ul className="mt-3 space-y-2.5">
        {DOCS.map((d) => {
          const Icon = d.icon;
          return (
            <li key={d.title}>
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-2xl bg-card p-4 text-left shadow-soft transition active:scale-[0.99]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[hsl(var(--brand-blue))]/10">
                  <Icon className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-foreground">{d.title}</p>
                  <p className="text-[11px] text-muted-foreground">{d.size}</p>
                </div>
                <Download className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* ===================== DETALHES ===================== */

function DetalhesTab() {
  const rows = [
    { label: "Valor total do projeto", value: "R$ 850.000" },
    { label: "Valor da cota", value: "R$ 8.500" },
    { label: "Total de cotas", value: "100 cotas" },
    { label: "ROI estimado", value: "12,8% a.a.", highlight: true },
    { label: "Prazo estimado", value: "12 meses" },
    { label: "Tipo", value: "Residencial" },
  ];
  return (
    <section className="mt-6 space-y-4">
      <div className="rounded-3xl bg-card p-5 shadow-soft">
        <h3 className="text-base font-bold text-foreground">Sobre o projeto</h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/80">
          Casa térrea de alto padrão localizada no bairro Jardins em Campinas. Projeto
          arquitetônico moderno com acabamento premium, área de lazer completa e
          paisagismo exclusivo.
        </p>
      </div>

      <div className="rounded-3xl bg-card p-5 shadow-soft">
        <h3 className="text-base font-bold text-foreground">Informações</h3>
        <ul className="mt-3 divide-y divide-border">
          {rows.map((r) => (
            <li key={r.label} className="flex items-center justify-between py-3">
              <span className="text-sm text-muted-foreground">{r.label}</span>
              <span
                className={
                  "text-sm font-bold " +
                  (r.highlight ? "text-[hsl(var(--brand-blue))]" : "text-foreground")
                }
              >
                {r.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ===================== PROGRESSO ===================== */

const MILESTONES = [
  { label: "Captação concluída", date: "10 abr 2026", done: true },
  { label: "Obra iniciada", date: "23 abr 2026", done: true },
  { label: "Fundação concluída", date: "02 mai 2026", done: true },
  { label: "Estrutura", date: "Em andamento", done: false, current: true },
  { label: "Acabamento", date: "Previsto ago 2026", done: false },
  { label: "Entrega", date: "Previsto out 2026", done: false },
];

function ProgressoTab() {
  return (
    <section className="mt-6 space-y-4">
      <div className="rounded-3xl bg-card p-5 shadow-soft">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-foreground">Progresso da obra</h3>
          <span className="text-2xl font-bold text-[hsl(var(--brand-blue))]">65%</span>
        </div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full rounded-full bg-gradient-brand" style={{ width: "65%" }} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Meta de conclusão: out 2026</p>
      </div>

      <div className="rounded-3xl bg-card p-5 shadow-soft">
        <h3 className="text-base font-bold text-foreground">Marcos</h3>
        <ol className="relative mt-4 space-y-4">
          <span className="absolute left-3 top-2 bottom-2 w-px bg-border" aria-hidden />
          {MILESTONES.map((m) => (
            <li key={m.label} className="relative pl-10">
              <span
                className={
                  "absolute left-0 top-0.5 flex h-6 w-6 items-center justify-center rounded-full " +
                  (m.done
                    ? "bg-[hsl(var(--brand-blue))] text-white"
                    : m.current
                      ? "border-2 border-[hsl(var(--brand-blue))] bg-card text-[hsl(var(--brand-blue))]"
                      : "border-2 border-border bg-card")
                }
              >
                {m.done ? (
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                ) : m.current ? (
                  <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand-blue))]" />
                ) : null}
              </span>
              <div className="flex items-center justify-between">
                <p
                  className={
                    "text-sm font-bold " +
                    (m.done || m.current ? "text-foreground" : "text-muted-foreground")
                  }
                >
                  {m.label}
                </p>
                <span className="text-[11px] text-muted-foreground">{m.date}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProjectDetail;
