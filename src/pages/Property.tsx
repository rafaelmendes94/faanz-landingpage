import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  MapPin,
  Calendar,
  DollarSign,
  FileText,
  MessageSquare,
  Folder,
  Info,
  Building2,
  PieChart,
  Ticket,
  Users,
  CheckCircle2,
  TrendingUp,
  Share2,
} from "lucide-react";
import hero from "@/assets/property-detail-hero.jpg";

type TabKey = "resumo" | "atualizacoes" | "documentos" | "detalhes";

const TABS: { key: TabKey; label: string; icon: typeof FileText }[] = [
  { key: "resumo", label: "Resumo", icon: FileText },
  { key: "atualizacoes", label: "Atualizações", icon: MessageSquare },
  { key: "documentos", label: "Documentos", icon: Folder },
  { key: "detalhes", label: "Detalhes", icon: Info },
];

const SUMMARY_ROWS = [
  { icon: Building2, label: "Valor total do projeto", value: "R$ 850.000" },
  { icon: PieChart, label: "Valor captado", value: "R$ 552.500" },
  { icon: Ticket, label: "Valor por cota", value: "R$ 8.500" },
  { icon: Users, label: "Total de cotas", value: "100" },
  { icon: CheckCircle2, label: "Cotas vendidas", value: "65 (65%)" },
  { icon: PieChart, label: "Cotas disponíveis", value: "35 (35%)" },
];

const Property = () => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("resumo");
  const progress = 65;

  return (
    <div className="min-h-screen bg-[hsl(var(--surface))] pb-32">
      <div className="mx-auto w-full max-w-md">
        {/* Hero */}
        <div className="relative">
          <img
            src={hero}
            alt="Casa Térrea Jardins"
            className="h-[260px] w-full object-cover rounded-b-[16px]"
            width={1024}
            height={1280}
          />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-12">
            <button
              onClick={() => navigate(-1)}
              aria-label="Voltar"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition hover:bg-black/55"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setFavorite((v) => !v)}
              aria-label="Favoritar"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[hsl(var(--brand-blue))] shadow-sm backdrop-blur-md transition hover:bg-white"
            >
              <Heart
                className={`h-5 w-5 ${favorite ? "fill-[hsl(var(--brand-blue))]" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Floating info card */}
        <div className="relative z-10 -mt-12 px-5">
          <div className="rounded-[28px] bg-white p-5 shadow-[0_20px_50px_-20px_rgba(15,42,105,0.25)]">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <h1 className="text-[20px] font-bold leading-tight text-[hsl(var(--ink))]">
                  Casa Térrea Jardins
                </h1>
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-[hsl(var(--muted-ink))]">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Residencial • Campinas, SP</span>
                </div>
              </div>
              <span className="shrink-0 rounded-full bg-[hsl(var(--brand-blue))]/10 px-3 py-1.5 text-[11px] font-semibold text-[hsl(var(--brand-blue))]">
                #A306
              </span>
            </div>

            {/* Progress */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-[hsl(var(--brand-blue))]">Captação</span>
                <span className="font-bold text-[hsl(var(--brand-blue))]">{progress}%</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[hsl(var(--brand-blue))]/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-blue-glow))]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Key info */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              <KeyInfo icon={Calendar} label="Início" value="23/04/26" />
              <KeyInfo icon={Calendar} label="Fim" value="A definir" />
              <KeyInfo icon={DollarSign} label="Aporte mín." value="R$ 8.500" />
            </div>
          </div>
        </div>

      {/* Tabs + Content card */}
      <div className="mt-4 px-5">
        <div className="rounded-[28px] bg-white p-5 shadow-[0_10px_30px_-20px_rgba(15,42,105,0.2)]">
          <div className="grid grid-cols-4 gap-2">
            {TABS.map((t) => {
              const Icon = t.icon;
              const active = activeTab === t.key;
              return (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className="flex flex-col items-center gap-1.5 pb-3"
                >
                  <Icon
                    className={`h-5 w-5 ${active ? "text-[hsl(var(--brand-blue))]" : "text-[hsl(var(--muted-ink))]"}`}
                  />
                  <span
                    className={`text-xs ${active ? "font-semibold text-[hsl(var(--brand-blue))]" : "text-[hsl(var(--muted-ink))]"}`}
                  >
                    {t.label}
                  </span>
                  <span
                    className={`mt-0.5 h-[3px] w-10 rounded-full ${active ? "bg-[hsl(var(--brand-blue))]" : "bg-transparent"}`}
                  />
                </button>
              );
            })}
          </div>
          <div className="-mx-5 border-t border-[hsl(var(--ink))]/5" />

          {activeTab === "resumo" && (
            <div className="pt-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-[15px] font-semibold text-[hsl(var(--ink))]">
                  Resumo do investimento
                </h2>
                <div className="rounded-2xl bg-[hsl(var(--brand-blue))]/8 px-4 py-2.5 text-right">
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-2xl font-bold text-[hsl(var(--brand-blue))]">
                      12,8%
                    </span>
                    <span className="text-xs font-medium text-[hsl(var(--brand-blue))]">
                      a.a.
                    </span>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-[11px] text-[hsl(var(--muted-ink))]">
                    Retorno esperado
                    <TrendingUp className="h-3 w-3 text-[hsl(var(--brand-blue))]" />
                  </div>
                </div>
              </div>

              <ul className="mt-4 divide-y divide-[hsl(var(--ink))]/5">
                {SUMMARY_ROWS.map((row) => {
                  const Icon = row.icon;
                  return (
                    <li
                      key={row.label}
                      className="flex items-center justify-between gap-3 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-4 w-4 text-[hsl(var(--muted-ink))]" />
                        <span className="text-sm text-[hsl(var(--muted-ink))]">
                          {row.label}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-[hsl(var(--ink))]">
                        {row.value}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <button className="mt-4 flex w-full items-center justify-between rounded-2xl bg-[hsl(var(--brand-blue))]/8 px-4 py-3 text-left transition hover:bg-[hsl(var(--brand-blue))]/12">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
                  <div>
                    <p className="text-sm text-[hsl(var(--ink))]">
                      <span className="font-semibold">23 investidores</span> já participam deste projeto
                    </p>
                    <p className="text-xs text-[hsl(var(--muted-ink))]">Junte-se a eles!</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
              </button>
            </div>
          )}

          {activeTab !== "resumo" && (
            <div className="py-10 text-center text-sm text-[hsl(var(--muted-ink))]">
              Conteúdo em breve.
            </div>
          )}
        </div>
      </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-[hsl(var(--ink))]/5 bg-white/95 px-5 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <button
            aria-label="Compartilhar"
            className="flex h-[60px] w-[72px] flex-col items-center justify-center gap-1 rounded-2xl border border-[hsl(var(--ink))]/10 bg-white text-[hsl(var(--ink))] shadow-sm transition hover:bg-[hsl(var(--surface))]"
          >
            <Share2 className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
            <span className="text-[10px] font-medium">Compartilhar</span>
          </button>
          <button onClick={() => navigate("/checkout")} className="flex h-[60px] flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-blue-glow))] text-white shadow-[0_15px_30px_-10px_hsl(var(--brand-blue)/0.55)] transition hover:opacity-95">
            <span className="text-base font-semibold">Quero investir</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

const KeyInfo = ({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) => (
  <div className="flex flex-col items-start gap-2">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--brand-blue))]/10">
      <Icon className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
    </div>
    <div className="min-w-0">
      <p className="text-[10px] leading-tight text-[hsl(var(--muted-ink))]">{label}</p>
      <p className="text-[13px] font-semibold leading-tight text-[hsl(var(--ink))]">{value}</p>
    </div>
  </div>
);

export default Property;
