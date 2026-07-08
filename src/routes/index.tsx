import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Camera, Sparkles, ShieldCheck, Truck, Clock, Phone, Mail } from "lucide-react";

import heroPhotos from "@/assets/hero-photos.jpg";
import polaroids from "@/assets/polaroids.jpg";
import gifts from "@/assets/gifts.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const REVEAL_URL = "https://revelacao.reflexus.com.br/";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Steps />
      <Quality />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight">Reflexus</span>
          <span className="text-lg font-bold uppercase tracking-[0.25em] text-primary">
            Digital
          </span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#top" className="hover:text-foreground">Início</a>
          <Link to="/revelacao" className="hover:text-foreground">Revelação</Link>
          <Link to="/produtos" className="hover:text-foreground">Produtos</Link>
          <a href="#como-funciona" className="hover:text-foreground">Como funciona</a>
          <a href="#contato" className="hover:text-foreground">Contato</a>
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
    <section id="top" className="relative overflow-hidden">
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
            Há mais de 30 anos revelando memórias
          </span>

          <h1 className="text-5xl md:text-7xl">
            Suas fotos <br />
            merecem <span className="text-gradient-warm">viver para sempre.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Revelação profissional com qualidade que preserva a
            cor das suas lembranças por décadas. Envie do celular, receba em casa.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/revelacao"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-warm px-7 py-4 text-base font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
            >
              <Camera className="h-5 w-5" />
              Enviar minhas fotos
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            <a
              href="#servicos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Ver todos os serviços →
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="30+" label="Anos de mercado" />
            <Stat n="Joinville" label="De Joinville SC" />
            <Stat n="Brasil" label="Entrega nacional" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-warm opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-warm">
            <img
              src={heroPhotos}
              alt="Fotos reveladas em papel fotográfico"
              width={1200}
              height={1400}
              className="h-[560px] w-full object-cover md:h-[640px]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rotate-[-6deg] rounded-xl bg-card p-3 shadow-card md:block">
            <div className="flex items-center gap-3 pr-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-sun/30">
                <Sparkles className="h-5 w-5 text-flame" />
              </div>
              <div>
                <div className="text-sm font-semibold">Cores que não desbotam</div>
                <div className="text-xs text-muted-foreground">Garantia de qualidade profissional</div>
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
  const items = ["Papel fotográfico premium", "Químicos originais", "Impressão profissional", "Cores duradouras", "Entrega em todo Brasil", "Polaroides", "Foto-presentes"];
  return (
    <div className="border-y border-border bg-cream py-4 overflow-hidden">
      <div className="flex gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-muted-foreground animate-[marquee_30s_linear_infinite]" style={{ animation: "marquee 30s linear infinite" }}>
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

function Quality() {
  const features = [
    { icon: ShieldCheck, title: "Qualidade profissional", desc: "Papéis e químicos originais que preservam suas fotos por toda a vida — não amarelam com o tempo." },
    { icon: Clock, title: "30+ anos de história", desc: "Referência regional em revelação profissional. Feito por gente que ama fotografia." },
    { icon: Truck, title: "Envio para todo Brasil", desc: "Envie do celular, receba em casa. Simples, rápido e com rastreio." },
  ];
  return (
    <section id="qualidade" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Qualidade</span>
          <h2 className="mt-4 text-4xl md:text-5xl">
            A diferença está no <em className="not-italic text-gradient-warm">papel.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            A maioria dos serviços online imprime em papel gráfico — barato, mas que
            amarela em poucos anos. Na Reflexus, usamos papel fotográfico
            e químicos originais desde 1993. Suas fotos duram gerações.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-card">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-gradient-warm text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <div className="font-serif text-xl">{f.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-cream/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Serviços</span>
            <h2 className="mt-4 text-4xl md:text-5xl">O que revelamos pra você.</h2>
          </div>
          <a href={REVEAL_URL} className="hidden shrink-0 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline md:inline-flex">
            Começar agora →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ServiceCard
            img={polaroids}
            tag="01 — Revelação"
            title="Fotos & Polaroides"
            desc="Escolha tamanhos, quantidade e formatos. Impressões clássicas, polaroides e opções imantadas."
          />
          <ServiceCard
            img={gifts}
            tag="02 — Personalizados"
            title="Foto-presentes & Álbuns"
            desc="Canecas, quadros, álbuns, camisetas, ímãs, porta-retratos, canva e muito mais."
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ img, tag, title, desc }: { img: string; tag: string; title: string; desc: string }) {
  return (
    <a
      href={REVEAL_URL}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-warm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-foreground">
          {tag}
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 p-7">
        <div>
          <div className="font-serif text-2xl">{title}</div>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">{desc}</p>
        </div>
        <div className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-foreground text-background transition group-hover:bg-primary">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </a>
  );
}

function Steps() {
  const steps = [
    { n: "01", t: "Escolha suas fotos", d: "No Android, envie direto do celular pro computador sem perder a qualidade, mesmo pelo site. Ou, se preferir, mande o link da nuvem." },
    { n: "02", t: "Personalize", d: "Escolha tamanho, papel, polaroide ou foto-presente." },
    { n: "03", t: "Receba em casa", d: "Impressão profissional entregue em todo o Brasil." },
  ];
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-24">
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

function Testimonials() {
  const items = [
    { n: "Tânia M. Santos", t: "Impressionada com a qualidade. As cores das fotos das minhas filhas ficaram perfeitas, exatamente como no visor." },
    { n: "Carlos Eduardo", t: "Uso há anos para revelar fotos de família. Nunca amarelaram. Confiança e qualidade sem igual." },
    { n: "Marina R.", t: "Envie do celular, chegou em poucos dias, embalagem impecável. Recomendo demais." },
  ];
  return (
    <section className="bg-foreground py-24 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-sun">Depoimentos</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-background">
            Memórias que <em className="not-italic text-gradient-warm">ficam.</em>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <figure key={i.n} className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="flex gap-1 text-sun">
                {"★★★★★".split("").map((s, k) => <span key={k}>{s}</span>)}
              </div>
              <blockquote className="mt-4 font-serif text-lg leading-snug">"{i.t}"</blockquote>
              <figcaption className="mt-6 text-sm uppercase tracking-widest text-background/60">
                — {i.n}
              </figcaption>
            </figure>
          ))}
        </div>
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
              Pronto pra tirar suas fotos da tela?
            </h2>
            <p className="mt-4 text-primary-foreground/90">
              Envie agora e receba em casa impressões que duram décadas.
            </p>
          </div>
          <Link
            to="/revelacao"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-foreground px-8 py-5 text-base font-semibold text-background shadow-card transition hover:bg-background hover:text-foreground"
          >
            <Camera className="h-5 w-5" />
            Revelar minhas fotos
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>

        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-cream/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl">Reflexus</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
              Digital
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Laboratório fotográfico digital. Há mais de 30 anos preservando memórias
            com qualidade profissional.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-primary hover:text-primary">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
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
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Serviços</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href={REVEAL_URL} className="hover:text-foreground">Revelação de fotos</a></li>
            <li><a href={REVEAL_URL} className="hover:text-foreground">Polaroides</a></li>
            <li><a href={REVEAL_URL} className="hover:text-foreground">Foto-presentes</a></li>
            <li><a href={REVEAL_URL} className="hover:text-foreground">Álbuns & porta-retratos</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Reflexus Digital. Todos os direitos reservados.</span>
          <span>Feito com carinho para preservar memórias.</span>
        </div>
      </div>
    </footer>
  );
}
