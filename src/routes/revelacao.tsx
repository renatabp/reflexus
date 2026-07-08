import { createFileRoute, Link } from "@tanstack/react-router";
import { LogoIcon } from "@/components/LogoIcon";
import {
  ArrowUpRight,
  Camera,
  Sparkles,
  ShieldCheck,
  Truck,
  Image as ImageIcon,
  Layers,
  Ruler,
  Magnet,
  Phone,
  Mail,
  Check,
} from "lucide-react";

import revelacaoHero from "@/assets/revelacao-hero.jpg";

export const Route = createFileRoute("/revelacao")({
  component: Revelacao,
  head: () => ({
    meta: [
      { title: "Revelação de Fotos — Tamanhos, Papéis e Acabamentos | Reflexus" },
      {
        name: "description",
        content:
          "Revele suas fotos em papel fotográfico profissional. Escolha tamanho (10x15, 13x18, 15x21, 20x30), acabamento brilho ou fosco, borda branca e mais.",
      },
      { property: "og:title", content: "Revelação de Fotos — Reflexus" },
      {
        property: "og:description",
        content:
          "Tamanhos, papéis e acabamentos para revelar suas fotos com qualidade profissional.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const REVEAL_URL = "https://revelacao.reflexus.com.br/";

function Revelacao() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Sizes />
      <Finishes />
      <Styles />
      <Steps />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <LogoIcon className="h-10 w-10 text-foreground" />
          <span className="font-serif text-3xl tracking-tight">Reflexus</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" className="hover:text-foreground">Início</Link>
          <Link to="/revelacao" className="text-foreground">Revelação</Link>
          <Link to="/produtos" className="hover:text-foreground">Produtos</Link>
          <Link to="/" hash="como-funciona" className="hover:text-foreground">Como funciona</Link>
          <Link to="/" hash="contato" className="hover:text-foreground">Contato</Link>
        </nav>
        <Link
          to="/revelacao"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
        >
          Revelar fotos
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--sun), transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--flame), transparent 60%)" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24 md:pb-28">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Revelação profissional
          </span>

          <h1 className="text-5xl md:text-7xl">
            Tamanhos, papéis e <span className="text-gradient-warm">acabamentos</span> pra sua foto.
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground whitespace-pre-line">
            Do 10x15 clássico ao 30x40 de parede. Papel brilho ou fosco. Com ou sem tarja. Polaroides também.
            Tudo revelado em papel profissional. Para tamanhos maiores, consultar orçamento e frete.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={REVEAL_URL}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-warm px-7 py-4 text-base font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
            >
              <Camera className="h-5 w-5" />
              Enviar minhas fotos
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#tamanhos" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline">
              Ver tamanhos e preços →
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="8" label="Tamanhos disponíveis" />
            <Stat n="2" label="Acabamentos" />
            <Stat n="Joinville" label="De Joinville SC" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-warm opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-warm">
            <img
              src={revelacaoHero}
              alt="Fotos reveladas em vários tamanhos e acabamentos"
              width={1400}
              height={1400}
              className="h-[560px] w-full object-cover md:h-[640px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rotate-[-4deg] rounded-xl bg-card p-3 shadow-card md:block">
            <div className="flex items-center gap-3 pr-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-sun/30">
                <Sparkles className="h-5 w-5 text-flame" />
              </div>
              <div>
                <div className="text-sm font-semibold">A partir de R$ 0,79</div>
                <div className="text-xs text-muted-foreground">por foto revelada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-3xl text-foreground">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

function Marquee() {
  const items = ["10x15", "13x18", "15x21", "20x30", "30x40", "Brilho", "Fosco", "Polaroide", "Com tarja", "Sem tarja", "Borda branca"];
  return (
    <div className="border-y border-border bg-cream py-4 overflow-hidden">
      <div className="flex gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={{ animation: "marquee 30s linear infinite" }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="h-1 w-1 rounded-full bg-primary" />
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-33.33%);} }`}</style>
    </div>
  );
}

type Size = {
  name: string;
  dim: string;
  price: string;
  desc: string;
  tag?: string;
  span?: string;
};

function Sizes() {
  const sizes: Size[] = [
    { name: "Mini", dim: "9x9 cm", price: "R$ 1,49", desc: "Formato quadrado tipo Instagram — perfeito para colar na parede em grid.", tag: "Instagram" },
    { name: "Clássico", dim: "10x15 cm", price: "R$ 0,79", desc: "O tamanho tradicional de álbum. Mais pedido pela maioria dos clientes.", tag: "Mais popular", span: "md:col-span-2" },
    { name: "Médio", dim: "13x18 cm", price: "R$ 1,99", desc: "Um pouco maior que o clássico. Ideal para porta-retratos de mesa." },
    { name: "Grande", dim: "15x21 cm", price: "R$ 2,49", desc: "Formato A5. Ótimo para presentear com moldura." },
    { name: "Poster", dim: "20x30 cm", price: "R$ 5,90", desc: "Impressão de destaque para quadros médios de parede.", span: "md:col-span-2" },
    { name: "Parede", dim: "30x40 cm", price: "R$ 12,90", desc: "Formato de destaque para uma foto que merece a parede inteira." },
    { name: "Polaroide", dim: "8,9x10,8 cm", price: "R$ 2,49", desc: "Com moldura branca e espaço para escrever — no estilo clássico." },
    { name: "Ímã Polaroide", dim: "7x9 cm", price: "R$ 4,90", desc: "Sua foto em imã para geladeira. Vai fazer bonito na cozinha." },
  ];

  return (
    <section id="tamanhos" className="bg-cream/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Tamanhos</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Escolha o tamanho da sua memória.</h2>
          </div>
          <a href={REVEAL_URL} className="hidden shrink-0 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline md:inline-flex">
            Começar pedido →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sizes.map((s) => (
            <SizeCard key={s.name} size={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SizeCard({ size }: { size: Size }) {
  return (
    <a
      href={REVEAL_URL}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-warm ${size.span ?? ""}`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-warm text-primary-foreground">
          <Ruler className="h-5 w-5" />
        </div>
        {size.tag && (
          <span className="rounded-full bg-sun/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-flame">
            {size.tag}
          </span>
        )}
      </div>
      <div className="font-serif text-3xl">{size.dim}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{size.name}</div>
      <p className="mt-4 text-sm text-muted-foreground">{size.desc}</p>
      <div className="mt-6 flex items-end justify-between border-t border-border pt-4">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">a partir de</div>
          <div className="font-serif text-2xl text-gradient-warm">{size.price}</div>
        </div>
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-foreground text-background transition group-hover:bg-primary">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </a>
  );
}

function Finishes() {
  const finishes = [
    {
      icon: Sparkles,
      title: "Brilho",
      subtitle: "Glossy",
      desc: "Cores vibrantes e alto contraste. O acabamento clássico de fotografia — reflete luz e destaca detalhes.",
      best: "Retratos, paisagens vibrantes, fotos de bebês.",
    },
    {
      icon: Layers,
      title: "Fosco",
      subtitle: "Matte",
      desc: "Sem reflexo, textura suave ao toque. Elegante e sofisticado — não marca dedo.",
      best: "Ensaios, fotos preto e branco, casamentos.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Acabamentos</span>
        <h2 className="mt-4 text-4xl md:text-5xl">
          Brilho ou <em className="not-italic text-gradient-warm">fosco</em>?
        </h2>
        <p className="mt-6 text-muted-foreground">
          Todos os acabamentos são em papel fotográfico premium — o que muda é a
          textura, o brilho e a sensação ao toque. Escolha o que combina com o momento.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {finishes.map((f) => (
          <div key={f.title} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-card">
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-lg bg-gradient-warm text-primary-foreground">
              <f.icon className="h-5 w-5" />
            </div>
            <div className="font-serif text-3xl">{f.title}</div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{f.subtitle}</div>
            <p className="mt-4 text-sm text-muted-foreground">{f.desc}</p>
            <div className="mt-6 rounded-2xl bg-cream/70 p-4">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Ideal para</div>
              <div className="mt-1 text-sm font-medium">{f.best}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Styles() {
  const options = [
    { icon: ImageIcon, t: "Com tarja", d: "Margem branca nas extremidades que impede o corte da foto. Sem perder um detalhe da sua foto!" },
    { icon: ImageIcon, t: "Sem tarja", d: "Impressão de ponta a ponta, sem margem, PADRÃO. Visual moderno e imersivo." },
    { icon: Layers, t: "Borda branca", d: "Uma fina borda branca em toda a foto. Toque clássico de laboratório." },
    { icon: Magnet, t: "Ímã", d: "Sua foto em ímã para geladeira. Vai fazer bonito na cozinha." },
  ];

  return (
    <section className="bg-foreground py-24 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-sun">Estilos & extras</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-background">
            Personalize cada <em className="not-italic text-gradient-warm">detalhe.</em>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {options.map((o) => (
            <div key={o.t} className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="shrink-0 grid h-12 w-12 place-items-center rounded-lg bg-gradient-warm text-primary-foreground">
                <o.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-serif text-xl text-background">{o.t}</div>
                <p className="mt-2 text-sm text-background/70">{o.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Papel fotográfico premium", d: "Cores que não desbotam com o tempo." },
            { icon: Truck, t: "Envio para todo Brasil", d: "Embalagem protetora e rastreio." },
            { icon: Check, t: "Correção de cor grátis", d: "Nossa equipe ajusta cada foto antes de imprimir." },
          ].map((i) => (
            <div key={i.t} className="flex items-center gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-sun/20 text-sun">
                <i.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-background">{i.t}</div>
                <div className="text-xs text-background/60">{i.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const steps = [
    { n: "01", t: "Envie suas fotos", d: "Direto do celular ou computador. Sem limite de quantidade." },
    { n: "02", t: "Escolha tamanho e acabamento", d: "Combine formatos e finishes na mesma encomenda." },
    { n: "03", t: "Receba impressas em casa", d: "Revelação profissional entregue em até 2 dias úteis." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Como funciona</span>
        <h2 className="mt-4 text-4xl md:text-5xl">Do celular para o papel em 3 passos.</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-2xl border border-border bg-card p-8">
            <div className="font-serif text-6xl text-gradient-warm">{s.n}</div>
            <div className="mt-4 font-serif text-2xl">{s.t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-warm p-10 md:p-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-4xl text-primary-foreground md:text-6xl">
              Pronto pra revelar suas memórias?
            </h2>
            <p className="mt-4 text-primary-foreground/90">
              Envie suas fotos agora e escolha tamanho e acabamento no próximo passo.
            </p>
          </div>
          <a
            href={REVEAL_URL}
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-foreground px-8 py-5 text-base font-semibold text-background shadow-card transition hover:bg-background hover:text-foreground"
          >
            <Camera className="h-5 w-5" />
            Enviar minhas fotos
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <LogoIcon className="h-9 w-9 text-foreground" />
            <span className="font-serif text-3xl">Reflexus</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Laboratório fotográfico. Há mais de 30 anos preservando memórias com qualidade profissional.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contato</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+5547999123111" className="inline-flex items-center gap-2 hover:text-primary">
                <Phone className="h-4 w-4 text-primary" /> +55 (47) 99912-3111
              </a>
            </li>
            <li>
              <a href="mailto:contato@reflexus.com.br" className="inline-flex items-center gap-2 hover:text-primary">
                <Mail className="h-4 w-4 text-primary" /> contato@reflexus.com.br
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Início</Link></li>
            <li><Link to="/revelacao" className="hover:text-foreground">Revelação</Link></li>
            <li><Link to="/produtos" className="hover:text-foreground">Produtos</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Reflexus. Todos os direitos reservados.</span>
          <span>Feito com carinho para preservar memórias.</span>
        </div>
      </div>
    </footer>
  );
}
