import Logo from "@/components/Logo";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BatteryFull,
  Bell,
  ChevronDown,
  Heart,
  MapPin,
  Plus,
  Search,
  Signal,
  SlidersHorizontal,
  Wifi,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import p4 from "@/assets/property-4.jpg";
import p5 from "@/assets/property-5.jpg";
import p6 from "@/assets/property-6.jpg";

type Tag = "Pronto" | "Captação" | "Em obra" | "Lançamento" | "Liderança";

type Property = {
  id: string;
  name: string;
  city: string;
  rooms: string;
  area: string;
  price: string;
  yieldPct: string;
  tag: Tag;
  status: "captacao" | "obra" | "pronto" | "lancamento";
  img: string;
};

const PROPERTIES: Property[] = [
  { id: "1", name: "Casa Jardins", city: "Campinas, SP", rooms: "3q", area: "180m²", price: "R$ 850.000", yieldPct: "12,8% a.a.", tag: "Pronto", status: "pronto", img: p1 },
  { id: "2", name: "Vila Mariana Club", city: "São Paulo, SP", rooms: "2q", area: "78m²", price: "R$ 620.000", yieldPct: "11,2% a.a.", tag: "Captação", status: "captacao", img: p2 },
  { id: "3", name: "Reserva do Lago", city: "Ribeirão Preto, SP", rooms: "4q", area: "210m²", price: "R$ 1.250.000", yieldPct: "13,5% a.a.", tag: "Liderança", status: "pronto", img: p5 },
  { id: "4", name: "Casa Alphaville", city: "Barueri, SP", rooms: "4q", area: "250m²", price: "R$ 1.480.000", yieldPct: "10,7% a.a.", tag: "Pronto", status: "pronto", img: p4 },
  { id: "5", name: "Edifício Aurora", city: "Santos, SP", rooms: "2q", area: "85m²", price: "R$ 540.000", yieldPct: "12,1% a.a.", tag: "Em obra", status: "obra", img: p6 },
  { id: "6", name: "Residencial Park", city: "Curitiba, PR", rooms: "3q", area: "120m²", price: "R$ 720.000", yieldPct: "11,8% a.a.", tag: "Captação", status: "captacao", img: p3 },
];

const TAG_STYLES: Record<Tag, string> = {
  Pronto: "bg-emerald-500 text-white",
  Captação: "bg-orange-500 text-white",
  "Em obra": "bg-[hsl(var(--brand-blue))] text-white",
  Lançamento: "bg-foreground/70 text-white",
  Liderança: "bg-amber-500 text-white",
};

const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "captacao", label: "Captação" },
  { id: "obra", label: "Em obra" },
  { id: "pronto", label: "Prontos" },
  { id: "lancamento", label: "Lançamentos" },
] as const;

const Invest = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("todos");
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const filtered = useMemo(
    () => (filter === "todos" ? PROPERTIES : PROPERTIES.filter((p) => p.status === filter)),
    [filter],
  );

  const toggleFav = (id: string) =>
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-bg pb-28">
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-gradient-brand opacity-10 blur-3xl" />

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
        <div className="mt-4 grid grid-cols-3 items-center">
          <span />
          <div className="flex justify-center"><Logo size="sm" /></div>
          <button
            type="button"
            className="relative ml-auto flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-soft"
            aria-label="Notificações"
          >
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-[hsl(var(--brand-blue))] ring-2 ring-card" />
          </button>
        </div>

        {/* Title */}
        <div className="mt-4">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Investir</h1>
          <p className="mt-1 text-sm text-muted-foreground">Encontre as melhores oportunidades</p>
        </div>

        {/* Search */}
        <div className="mt-5 flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Para onde você quer investir?"
              className="h-12 w-full rounded-full border border-transparent bg-card pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 shadow-soft transition-all focus:border-[hsl(var(--brand-blue))] focus:outline-none focus:ring-4 focus:ring-[hsl(var(--brand-blue))]/15"
            />
          </div>
          <button
            type="button"
            aria-label="Filtros"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card text-foreground shadow-soft transition-all hover:-translate-y-0.5"
          >
            <SlidersHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* Filter chips */}
        <div className="-mx-6 mt-5 overflow-x-auto no-scrollbar">
          <div className="flex gap-2 px-6 pb-1">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={
                    "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all " +
                    (active
                      ? "bg-gradient-brand text-white shadow-brand"
                      : "bg-card text-foreground shadow-soft hover:-translate-y-0.5")
                  }
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results info */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">{filtered.length} imóveis encontrados</p>
          <button type="button" className="inline-flex items-center gap-1 text-xs font-semibold text-foreground">
            Mais rentáveis <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Grid */}
        <section className="mt-3 grid grid-cols-2 gap-3">
          {filtered.map((p) => {
            const fav = favorites.has(p.id);
            return (
              <article key={p.id} onClick={() => navigate(`/property/${p.id}`)} className="cursor-pointer overflow-hidden rounded-3xl bg-card shadow-soft transition active:scale-[0.98]">
                <div className="relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-32 w-full object-cover"
                  />
                  <span
                    className={
                      "absolute left-2 top-2 rounded-lg px-2 py-0.5 text-[10px] font-semibold " +
                      TAG_STYLES[p.tag]
                    }
                  >
                    {p.tag}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleFav(p.id)}
                    aria-label="Favoritar"
                    className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/40 text-white backdrop-blur transition-all hover:bg-foreground/60"
                  >
                    <Heart className={"h-4 w-4 " + (fav ? "fill-white" : "")} />
                  </button>
                </div>
                <div className="p-3">
                  <h4 className="text-sm font-bold text-foreground">{p.name}</h4>
                  <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {p.city}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {p.rooms} • {p.area}
                  </p>

                  <div className="mt-2 flex items-center justify-between rounded-xl bg-secondary/70 px-2.5 py-1.5">
                    <span className="text-[10px] text-muted-foreground">Rentabilidade</span>
                    <span className="text-xs font-bold text-[hsl(var(--brand-blue))]">{p.yieldPct}</span>
                  </div>

                  <div className="mt-2 flex items-end justify-between">
                    <p className="text-sm font-bold text-foreground">{p.price}</p>
                    <button
                      type="button"
                      aria-label={`Ver ${p.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-[hsl(var(--brand-blue))] transition-all hover:-translate-y-0.5"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </div>

      {/* FAB */}
      <button
        type="button"
        aria-label="Adicionar"
        className="fixed bottom-24 right-6 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-brand transition-all hover:-translate-y-0.5"
      >
        <Plus className="h-6 w-6" />
      </button>

      <BottomNav />
    </main>
  );
};

export default Invest;
