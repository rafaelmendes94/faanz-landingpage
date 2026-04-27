import Logo from "@/components/Logo";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Copy,
  DollarSign,
  Gift,
  Info,
  Link as LinkIcon,
  Mail,
  Share2,
  Upload,
  User,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import BottomNav from "@/components/BottomNav";
import heroImg from "@/assets/referral-hero.png";

const CODE = "FAANZ123";
const LINK = `https://faanz.app/invite/${CODE}`;

const Indique = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState<"code" | "link" | null>(null);

  const copy = (text: string, kind: "code" | "link") => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(kind);
      toast.success(kind === "code" ? "Código copiado!" : "Link copiado!");
      setTimeout(() => setCopied(null), 1500);
    });
  };

  const share = async () => {
    const data = {
      title: "Faanz",
      text: "Invista comigo na Faanz e ganhe bônus!",
      url: LINK,
    };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        /* user cancelled */
      }
    } else {
      copy(LINK, "link");
    }
  };

  return (
    <div className="min-h-screen bg-[image:var(--gradient-bg)] pb-32">
      {/* Header */}
      <header className="relative px-5 pt-6">
        <button
          onClick={() => navigate(-1)}
          aria-label="Voltar"
          className="absolute left-5 top-6 grid h-10 w-10 place-items-center rounded-full border border-border bg-card shadow-soft"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <div className="flex justify-center"><Logo size="sm" /></div>
        <h1 className="mt-3 text-center text-2xl font-bold text-foreground">
          Indique e ganhe
        </h1>
      </header>

      {/* Hero */}
      <section className="mt-5 px-5">
        <div className="relative overflow-hidden rounded-[28px] bg-[image:var(--gradient-brand)] p-5 shadow-brand">
          <div className="relative z-10 max-w-[58%]">
            <h2 className="text-2xl font-bold leading-tight text-white">
              Convide amigos<br />e ganhe bônus
            </h2>
            <p className="mt-2 text-sm leading-snug text-white/85">
              Ganhe recompensas sempre que alguém investir através do seu convite.
            </p>
          </div>
          <img
            src={heroImg}
            alt="Convide amigos e ganhe bônus"
            width={768}
            height={768}
            className="pointer-events-none absolute -right-4 -bottom-2 h-[180px] w-auto object-contain"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="mt-7 px-5">
        <h3 className="mb-4 text-center text-base font-semibold text-foreground">
          Como funciona
        </h3>
        <div className="relative flex items-start justify-between">
          <Step n={1} icon={Upload} label={"Compartilhe\nseu link"} />
          <Step n={2} icon={User} label={"Seu amigo\nse cadastra"} />
          <Step n={3} icon={DollarSign} label={"Você ganha\nbônus"} />
        </div>
      </section>

      {/* Invite card */}
      <section className="mt-6 px-5">
        <div className="rounded-[28px] border border-border bg-card p-5 shadow-soft">
          {/* Code */}
          <p className="text-xs font-medium text-muted-foreground">
            Seu código de convite
          </p>
          <div className="mt-2 flex items-center gap-3">
            <div className="flex-1 rounded-2xl bg-[hsl(var(--brand-blue))]/8 px-4 py-3">
              <span className="text-xl font-bold tracking-wide text-[hsl(var(--brand-blue))]">
                {CODE}
              </span>
            </div>
            <button
              onClick={() => copy(CODE, "code")}
              className="flex items-center gap-1.5 rounded-2xl border border-[hsl(var(--brand-blue))]/40 px-3.5 py-3 text-xs font-semibold text-[hsl(var(--brand-blue))] transition-colors hover:bg-[hsl(var(--brand-blue))]/5"
            >
              <Copy className="h-3.5 w-3.5" />
              {copied === "code" ? "Copiado" : "Copiar código"}
            </button>
          </div>

          {/* Link */}
          <p className="mt-5 text-xs font-medium text-muted-foreground">
            Seu link de convite
          </p>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 truncate rounded-2xl bg-secondary px-4 py-3 text-xs text-muted-foreground">
              {LINK}
            </div>
            <button
              onClick={() => copy(LINK, "link")}
              className="flex items-center gap-1.5 rounded-2xl bg-[image:var(--gradient-brand)] px-3.5 py-3 text-xs font-semibold text-white shadow-brand"
            >
              <Copy className="h-3.5 w-3.5" />
              {copied === "link" ? "Copiado" : "Copiar link"}
            </button>
          </div>

          {/* Share via */}
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-sm font-semibold text-foreground">
              Compartilhar via
            </p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <ShareBtn
                icon={WhatsAppIcon}
                label="WhatsApp"
                onClick={() =>
                  window.open(
                    `https://wa.me/?text=${encodeURIComponent("Invista comigo na Faanz: " + LINK)}`,
                    "_blank",
                  )
                }
              />
              <ShareBtn
                icon={Mail}
                label="E-mail"
                onClick={() =>
                  (window.location.href = `mailto:?subject=Convite Faanz&body=${encodeURIComponent("Invista comigo na Faanz: " + LINK)}`)
                }
              />
              <ShareBtn
                icon={LinkIcon}
                label="Copiar link"
                onClick={() => copy(LINK, "link")}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-5 px-5">
        <div className="rounded-[28px] bg-secondary/70 p-5">
          <div className="grid grid-cols-2 divide-x divide-border">
            <Stat
              icon={Users}
              label="Amigos convidados"
              value="12"
              href="#"
              hrefLabel="Ver detalhes"
            />
            <Stat
              icon={Gift}
              label="Bônus acumulado"
              value="R$ 850"
              href="#"
              hrefLabel="Ver histórico"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-6 px-5">
        <button
          onClick={share}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] text-base font-semibold text-white shadow-brand transition-transform active:scale-[0.99]"
        >
          <Share2 className="h-5 w-5" />
          Compartilhar convite
        </button>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
          <Info className="h-3.5 w-3.5" />
          Bônus liberado após investimento confirmado.
        </p>
      </section>

      <BottomNav />
    </div>
  );
};

/* ---------- Local components ---------- */

function Step({
  n,
  icon: Icon,
  label,
}: {
  n: number;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="relative flex flex-1 flex-col items-center">
      <div className="relative">
        <div className="grid h-16 w-16 place-items-center rounded-full bg-[hsl(var(--brand-blue))]/10">
          <Icon className="h-7 w-7 text-[hsl(var(--brand-blue))]" />
        </div>
        <span className="absolute -top-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-[hsl(var(--brand-blue))] text-[11px] font-bold text-white shadow-brand">
          {n}
        </span>
      </div>
      <p className="mt-2 whitespace-pre-line text-center text-xs font-medium leading-tight text-foreground">
        {label}
      </p>
      {n < 3 && (
        <div
          aria-hidden
          className="absolute top-8 left-[calc(50%+2rem)] right-[-2rem] border-t border-dashed border-[hsl(var(--brand-blue))]/40"
        />
      )}
    </div>
  );
}

function ShareBtn({
  icon: Icon,
  label,
  onClick,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-secondary/50 py-3 transition-colors hover:bg-secondary"
    >
      <Icon className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
      <span className="text-xs font-medium text-foreground">{label}</span>
    </button>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  href,
  hrefLabel,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
  hrefLabel: string;
}) {
  return (
    <div className="flex items-center gap-3 px-3 first:pl-0 last:pr-0">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[hsl(var(--brand-blue))]/20 bg-card">
        <Icon className="h-5 w-5 text-[hsl(var(--brand-blue))]" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] text-muted-foreground">{label}</p>
        <p className="text-lg font-bold text-foreground">{value}</p>
        <Link
          to={href}
          className="text-[11px] font-medium text-[hsl(var(--brand-blue))]"
        >
          {hrefLabel} ›
        </Link>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.12 1.6 5.92L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.43h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.38-8.42ZM12.05 21.7h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.83 9.83 0 0 1-1.51-5.18c0-5.44 4.42-9.86 9.86-9.86 2.63 0 5.1 1.03 6.97 2.9a9.78 9.78 0 0 1 2.89 6.97c0 5.44-4.42 9.84-9.8 9.84Zm5.4-7.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.49-.66-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.27.17-1.4-.07-.12-.27-.2-.57-.34Z" />
    </svg>
  );
}

export default Indique;
