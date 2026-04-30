import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import {
  Search,
  Bell,
  Heart,
  Bed,
  Bath,
  Square as SquareIcon,
  TrendingUp,
  Wallet,
  Home as HomeIcon,
  Activity,
} from "lucide-react";

/* ───────── PHONE 1 — Home / catálogo ───────── */
export function PhoneScreenHome() {
  return (
    <div className="flex h-full w-full flex-col bg-[#F7F8FB] pt-7">
      {/* Status / header */}
      <div className="flex items-center justify-between px-3 pt-2">
        <div>
          <p className="text-[8px] text-slate-500">Olá,</p>
          <p className="text-[10px] font-semibold text-slate-900">Corretor</p>
        </div>
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm">
          <Bell className="h-2.5 w-2.5 text-slate-700" />
        </div>
      </div>

      {/* Search */}
      <div className="mx-3 mt-2 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 shadow-sm">
        <Search className="h-2.5 w-2.5 text-slate-400" />
        <span className="text-[8px] text-slate-400">Buscar imóveis…</span>
      </div>

      {/* Cards */}
      <div className="mt-2.5 flex-1 space-y-2 overflow-hidden px-3">
        {[p1, p2].map((src, i) => (
          <div key={i} className="overflow-hidden rounded-xl bg-white shadow-sm">
            <div className="relative h-14 w-full overflow-hidden">
              <img src={src} alt="" className="h-full w-full object-cover" />
              <div className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white/90">
                <Heart className="h-2 w-2 text-[#1D4ED8]" />
              </div>
            </div>
            <div className="p-1.5">
              <p className="text-[8px] font-semibold text-slate-900">Edifício Aurora</p>
              <p className="text-[7px] text-slate-500">São Paulo · SP</p>
              <p className="mt-0.5 text-[8px] font-bold text-[#1D4ED8]">R$ 1.2M</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div className="mt-1 flex items-center justify-around border-t border-slate-100 bg-white py-1.5">
        <HomeIcon className="h-2.5 w-2.5 text-[#1D4ED8]" />
        <Search className="h-2.5 w-2.5 text-slate-300" />
        <Heart className="h-2.5 w-2.5 text-slate-300" />
        <Wallet className="h-2.5 w-2.5 text-slate-300" />
      </div>
    </div>
  );
}

/* ───────── PHONE 2 — Property detail ───────── */
export function PhoneScreenDetail() {
  return (
    <div className="flex h-full w-full flex-col bg-white pt-7">
      {/* Hero image */}
      <div className="relative mx-2 mt-2 h-[38%] overflow-hidden rounded-2xl">
        <img src={p3} alt="" className="h-full w-full object-cover" />
        <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow">
          <Heart className="h-3 w-3 text-[#1D4ED8]" />
        </div>
        <div className="absolute bottom-2 left-2 rounded-full bg-[#1D4ED8] px-2 py-0.5 text-[8px] font-semibold text-white">
          Lançamento
        </div>
      </div>

      {/* Info */}
      <div className="flex-1 px-3 pt-3">
        <p className="text-[10px] font-bold text-slate-900">Residencial Marques</p>
        <p className="text-[8px] text-slate-500">Itaim Bibi · São Paulo</p>

        <div className="mt-2 flex items-center gap-3 text-slate-600">
          <div className="flex items-center gap-1">
            <Bed className="h-2.5 w-2.5" />
            <span className="text-[8px]">3</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-2.5 w-2.5" />
            <span className="text-[8px]">2</span>
          </div>
          <div className="flex items-center gap-1">
            <SquareIcon className="h-2.5 w-2.5" />
            <span className="text-[8px]">120m²</span>
          </div>
        </div>

        <div className="mt-2 rounded-xl bg-[#F7F8FB] p-2">
          <p className="text-[7px] uppercase tracking-wider text-slate-500">A partir de</p>
          <p className="text-[13px] font-bold text-slate-900">R$ 1.890.000</p>
          <p className="text-[8px] font-semibold text-[#1D4ED8]">Comissão até 6%</p>
        </div>
      </div>

      {/* CTA */}
      <div className="px-3 pb-4">
        <div className="flex h-7 items-center justify-center rounded-full bg-[#1D4ED8] text-[9px] font-semibold text-white shadow-md">
          Reservar unidade
        </div>
      </div>
    </div>
  );
}

/* ───────── PHONE 3 — Earnings dashboard ───────── */
export function PhoneScreenEarnings() {
  const bars = [40, 60, 35, 75, 55, 90, 70];
  return (
    <div className="flex h-full w-full flex-col bg-[#F7F8FB] pt-7">
      <div className="px-3 pt-2">
        <p className="text-[8px] text-slate-500">Ganhos do mês</p>
        <p className="text-[14px] font-bold text-slate-900">R$ 48.250</p>
        <div className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-[#1D4ED8]/10 px-1.5 py-0.5 text-[7px] font-semibold text-[#1D4ED8]">
          <TrendingUp className="h-2 w-2" /> +12,4%
        </div>
      </div>

      {/* Chart card */}
      <div className="mx-3 mt-2 rounded-xl bg-white p-2 shadow-sm">
        <div className="flex h-16 items-end justify-between gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-[#1D4ED8] to-[#60A5FA]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[6px] text-slate-400">
          {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="mt-2 flex-1 space-y-1.5 px-3">
        {[
          { t: "Comissão #482", v: "R$ 12.500" },
          { t: "Comissão #481", v: "R$ 8.900" },
          { t: "Comissão #480", v: "R$ 6.200" },
        ].map((r) => (
          <div
            key={r.t}
            className="flex items-center justify-between rounded-lg bg-white px-2 py-1.5 shadow-sm"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1D4ED8]/10">
                <Wallet className="h-2 w-2 text-[#1D4ED8]" />
              </div>
              <span className="text-[8px] font-medium text-slate-700">{r.t}</span>
            </div>
            <span className="text-[8px] font-bold text-slate-900">{r.v}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-around border-t border-slate-100 bg-white py-1.5">
        <HomeIcon className="h-2.5 w-2.5 text-slate-300" />
        <Activity className="h-2.5 w-2.5 text-slate-300" />
        <Wallet className="h-2.5 w-2.5 text-[#1D4ED8]" />
      </div>
    </div>
  );
}