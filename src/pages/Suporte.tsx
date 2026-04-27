import Logo from "@/components/Logo";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Headphones,
  History,
  HelpCircle,
  Mail,
  MessageCircle,
  MoreVertical,
  Paperclip,
  Send,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import BottomNav from "@/components/BottomNav";

type Tone = "blue" | "green";

type Channel = {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
  tone: Tone;
};

const CHANNELS: Channel[] = [
  { id: "chat", title: "Chat ao vivo", text: "Fale com nosso time em tempo real", icon: MessageCircle, tone: "blue" },
  { id: "wpp", title: "WhatsApp", text: "Atendimento rápido pelo WhatsApp", icon: MessageCircle, tone: "green" },
  { id: "mail", title: "Email", text: "Envie sua dúvida por email", icon: Mail, tone: "blue" },
];

type Msg = {
  id: string;
  side: "user" | "agent";
  text: string;
  time: string;
};

const INITIAL_MSGS: Msg[] = [
  { id: "1", side: "user", text: "Quero entender melhor meu investimento", time: "10:30" },
  {
    id: "2",
    side: "agent",
    text: "Olá, Ronaldo! 👋\nClaro! Vou te explicar como funciona o retorno esperado do seu investimento.",
    time: "10:31",
  },
  { id: "3", side: "user", text: "Ótimo! E quando recebo o retorno?", time: "10:32" },
  {
    id: "4",
    side: "agent",
    text: "Depende do projeto. No seu caso, o retorno está previsto para começar em Julho/2026.",
    time: "10:33",
  },
];

type Faq = { id: string; text: string; icon: LucideIcon };

const FAQS: Faq[] = [
  { id: "1", text: "Como funciona o investimento?", icon: HelpCircle },
  { id: "2", text: "Quando recebo retorno?", icon: Calendar },
  { id: "3", text: "Posso retirar meu dinheiro?", icon: Wallet },
];

const ChannelCard = ({ channel }: { channel: Channel }) => {
  const Icon = channel.icon;
  const isGreen = channel.tone === "green";
  return (
    <button
      type="button"
      className="flex min-w-[150px] flex-1 flex-col rounded-[24px] border border-border bg-card p-4 text-left shadow-soft transition-transform active:scale-[0.98]"
    >
      <div className="mb-3 flex items-start justify-between">
        <div
          className={
            "flex h-11 w-11 items-center justify-center rounded-2xl " +
            (isGreen ? "bg-[#25D366]" : "bg-[hsl(var(--brand-blue))]")
          }
        >
          <Icon className="h-5 w-5 text-white" fill={isGreen ? "white" : "transparent"} />
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </div>
      <p className="text-[15px] font-semibold text-foreground">{channel.title}</p>
      <p className="mt-1 text-xs leading-snug text-muted-foreground">{channel.text}</p>
    </button>
  );
};

const TypingDots = () => (
  <div className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-muted px-4 py-3">
    {[0, 150, 300].map((d) => (
      <span
        key={d}
        className="h-1.5 w-1.5 animate-bounce rounded-full bg-[hsl(var(--brand-blue))]"
        style={{ animationDelay: `${d}ms` }}
      />
    ))}
  </div>
);

const Suporte = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Msg[]>(INITIAL_MSGS);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setTyping(false), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const time = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    setMessages((m) => [...m, { id: String(Date.now()), side: "user", text, time }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: String(Date.now() + 1),
          side: "agent",
          text: "Recebi sua mensagem! Já estou verificando para te responder. 💙",
          time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--surface))] pb-32">
      <div className="mx-auto max-w-md px-5 pt-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-soft"
            aria-label="Voltar"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <Logo size="sm" />
          <button className="flex items-center gap-1 text-sm font-medium text-[hsl(var(--brand-blue))]">
            <History className="h-4 w-4" />
            Histórico
          </button>
        </header>

        {/* Title */}
        <div className="mt-6">
          <h1 className="text-[34px] font-bold leading-tight tracking-tight text-foreground">Suporte</h1>
          <p className="mt-1 text-[15px] text-muted-foreground">
            Estamos aqui para ajudar <span className="text-[hsl(var(--brand-blue))]">💙</span>
          </p>
        </div>

        {/* Channels */}
        <div className="mt-5 flex gap-3">
          {CHANNELS.map((c) => (
            <ChannelCard key={c.id} channel={c} />
          ))}
        </div>

        {/* Chat card */}
        <section className="mt-5 overflow-hidden rounded-[28px] border border-border bg-card shadow-soft">
          {/* Chat header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative flex">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[hsl(var(--brand-blue-light))] to-[hsl(var(--brand-blue-deep))] ring-2 ring-card" />
                <div className="-ml-3 h-10 w-10 rounded-full bg-gradient-to-br from-[hsl(var(--brand-blue))] to-[hsl(var(--brand-blue-deep))] ring-2 ring-card" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-foreground">Atendimento Faanz</p>
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs text-muted-foreground">Online agora</p>
              </div>
            </div>
            <button className="text-muted-foreground" aria-label="Mais opções">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4">
            <div className="flex justify-center">
              <span className="rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-muted-foreground">
                Hoje
              </span>
            </div>
            {messages.map((m) => {
              const isUser = m.side === "user";
              return (
                <div key={m.id} className={"flex " + (isUser ? "justify-end" : "justify-start")}>
                  <div
                    className={
                      "max-w-[78%] whitespace-pre-line rounded-2xl px-4 py-2.5 text-sm leading-snug " +
                      (isUser
                        ? "rounded-br-md bg-[hsl(var(--brand-blue))] text-[hsl(var(--brand-foreground))]"
                        : "rounded-bl-md bg-muted text-foreground")
                    }
                  >
                    <p>{m.text}</p>
                    <p
                      className={
                        "mt-1 text-[10px] " +
                        (isUser ? "text-white/70 text-right" : "text-muted-foreground")
                      }
                    >
                      {m.time}
                      {isUser && <span className="ml-1">✓✓</span>}
                    </p>
                  </div>
                </div>
              );
            })}
            {typing && <TypingDots />}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border bg-card px-3 py-3">
            <button className="text-muted-foreground" aria-label="Anexar">
              <Paperclip className="h-5 w-5" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Digite sua mensagem..."
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-[hsl(var(--brand-blue))]"
            />
            <button
              onClick={send}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--brand-blue))] text-white shadow-brand active:scale-95"
              aria-label="Enviar"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-5 rounded-[28px] border border-border bg-card p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-semibold text-foreground">Perguntas frequentes</h2>
            <button className="text-xs font-medium text-[hsl(var(--brand-blue))]">Ver todas</button>
          </div>
          <ul className="mt-3 divide-y divide-border">
            {FAQS.map((f) => {
              const Icon = f.icon;
              return (
                <li key={f.id}>
                  <button className="flex w-full items-center gap-3 py-3 text-left">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[hsl(var(--brand-blue))]/10">
                      <Icon className="h-4 w-4 text-[hsl(var(--brand-blue))]" />
                    </div>
                    <span className="flex-1 text-sm text-foreground">{f.text}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        {/* CTA */}
        <button
          className="mt-5 flex w-full flex-col items-center justify-center rounded-[22px] py-4 text-white shadow-brand active:scale-[0.99]"
          style={{ background: "var(--gradient-brand)" }}
        >
          <span className="flex items-center gap-2 text-base font-semibold">
            <Headphones className="h-5 w-5" />
            Falar com suporte
          </span>
          <span className="mt-0.5 text-xs text-white/80">Tempo médio de resposta: 2 min</span>
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Suporte;
