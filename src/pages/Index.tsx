import { ArrowRight, ShieldCheck, Signal, Wifi, BatteryFull } from "lucide-react";
import { Link } from "react-router-dom";
import heroAthlete from "@/assets/login-hero-athlete.png";
import Logo from "@/components/Logo";

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
    <path d="M16.365 1.43c0 1.14-.42 2.22-1.18 3.02-.81.86-2.13 1.52-3.21 1.43-.13-1.11.42-2.27 1.16-3.02.83-.85 2.24-1.46 3.23-1.43zM20.5 17.4c-.55 1.27-.81 1.84-1.51 2.96-.98 1.55-2.36 3.49-4.07 3.5-1.52.02-1.91-.99-3.97-.98-2.06.01-2.49 1-4.01.98-1.71-.01-3.02-1.76-4-3.31C.07 16.4-.22 11.42 1.41 8.78c1.16-1.88 3-2.98 4.72-2.98 1.76 0 2.86.97 4.31.97 1.41 0 2.27-.97 4.3-.97 1.54 0 3.18.84 4.34 2.29-3.82 2.09-3.2 7.55 1.42 9.31z"/>
    </svg>
);

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_55%,#e9f1ff_100%)]">
      {/* Full-bleed background image */}
      <img
        src={heroAthlete}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Bottom fade for legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-white via-white/90 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col px-6">
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
        <section className="mt-4 flex flex-col items-center text-center">
          <Logo size="md" align="center" />
        </section>

        {/* Spacer to let athlete bg show */}
        <div className="flex-1" />

        {/* Actions */}
        <section className="pt-4 pb-[50px]">
          <Link
            to="/welcome"
            className="group flex h-14 w-full items-center justify-center gap-2 rounded-[30px] bg-gradient-brand px-6 text-[15px] font-semibold text-white shadow-brand transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            Entrar
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/register"
            className="mt-3 flex h-14 w-full items-center justify-center gap-2 rounded-[30px] border border-border bg-card text-[15px] font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5"
          >
            Criar conta
          </Link>

          {/* Divider */}
          <div className="my-5 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs font-medium text-muted-foreground">ou continue com</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="flex h-14 items-center justify-center gap-2 rounded-[24px] border border-border bg-card text-sm font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5"
            >
              <GoogleIcon />
              Google
            </button>
            <button
              type="button"
              className="flex h-14 items-center justify-center gap-2 rounded-[24px] border border-border bg-card text-sm font-semibold text-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5"
            >
              <AppleIcon />
              Apple
            </button>
          </div>

          {/* Trust */}
          <div className="mt-6 flex flex-col items-center text-center">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))]/10 text-[hsl(var(--brand-blue))]">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <span className="text-sm font-semibold text-foreground">100% seguro</span>
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Seus dados protegidos com criptografia
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Index;
