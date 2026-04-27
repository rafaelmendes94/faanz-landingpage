import { Link, useLocation } from "react-router-dom";
import { BarChart3, Folder, Gift, Home as HomeIcon, User, type LucideIcon } from "lucide-react";

type NavItem = { label: string; icon: LucideIcon; to: string };

const NAV: NavItem[] = [
  { label: "Home", icon: HomeIcon, to: "/home" },
  { label: "Investir", icon: BarChart3, to: "/invest" },
  { label: "Projetos", icon: Folder, to: "/projetos" },
  { label: "Bonificação", icon: Gift, to: "/bonificacao" },
  { label: "Perfil", icon: User, to: "/perfil" },
];

const BottomNav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-4 left-1/2 z-10 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-[28px] border border-border bg-card/95 p-3 shadow-soft backdrop-blur">
      <ul className="flex items-center justify-between">
        {NAV.map(({ label, icon: Icon, to }) => {
          const active = pathname === to;
          return (
            <li key={label}>
              <Link
                to={to}
                className={
                  "flex flex-col items-center gap-1 rounded-2xl px-3 py-1.5 transition-all " +
                  (active ? "text-[hsl(var(--brand-blue))]" : "text-muted-foreground")
                }
              >
                <Icon className={"h-5 w-5 " + (active ? "fill-[hsl(var(--brand-blue))]/15" : "")} />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNav;
