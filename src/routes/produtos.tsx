import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Coffee, Frame, BookHeart, Shirt, Puzzle, Magnet, Sparkles, ShieldCheck, Truck, Camera, Phone, Mail } from "lucide-react";

import productsHero from "@/assets/products-hero.jpg";
import productMug from "@/assets/product-mug.jpg";
import productFrame from "@/assets/product-frame.jpg";
import productAlbum from "@/assets/product-album.jpg";
import productGifts from "@/assets/product-gifts2.jpg";
import productApparel from "@/assets/product-apparel.jpg";
import productMagnet from "@/assets/product-magnet.jpg";

export const Route = createFileRoute("/produtos")({
  component: Produtos,
  head: () => ({
    meta: [
      { title: "Foto-presentes & Personalizados — Reflexus Digital" },
      {
        name: "description",
        content:
          "Canecas, quadros, álbuns, camisetas, ímãs e mais — transforme suas fotos em presentes únicos com a qualidade da Reflexus.",
      },
      { property: "og:title", content: "Foto-presentes & Personalizados — Reflexus Digital" },
      {
        property: "og:description",
        content:
          "Canecas, quadros, álbuns e presentes personalizados com suas fotos favoritas. Impressão profissional, entrega em todo o Brasil.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const REVEAL_URL = "https://revelacao.reflexus.com.br/";

function Produtos() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Catalog />
      <HowItWorks />
      <Bundle />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight">Reflexus</span>
          <span className="text-lg font-bold uppercase tracking-[0.25em] text-primary">Digital</span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <Link to="/" className="hover:text-foreground">Início</Link>
          <Link to="/produtos" className="text-foreground">Produtos</Link>
          <Link to="/" hash="qualidade" className="hover:text-foreground">Qualidade</Link>
          <Link to="/" hash="contato" className="hover:text-foreground">Contato</Link>
        </nav>
        <a
          href={REVEAL_URL}
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
        >
          Encomendar
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--sun), transparent 60%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--flame), transparent 60%)" }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 pt-16 md:grid-cols-2 md:pt-24 md:pb-28">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Foto-presentes personalizados
          </span>

          <h1 className="text-5xl md:text-7xl">
            Suas memórias em <span className="text-gradient-warm">objetos que se ganham de presente.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Canecas, quadros, álbuns, camisetas, ímãs, quebra-cabeças e muito mais.
            A gente transforma a foto que você ama em um presente inesquecível.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={REVEAL_URL}
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-warm px-7 py-4 text-base font-semibold text-primary-foreground shadow-warm transition hover:brightness-110"
            >
              <Sparkles className="h-5 w-5" />
              Criar meu presente
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a href="#catalogo" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline">
              Ver catálogo →
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat n="+20" label="Produtos personalizáveis" />
            <Stat n="7 dias" label="Prazo médio de produção" />
            <Stat n="Brasil" label="Entrega em todo país" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-warm opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-warm">
            <img
              src={productsHero}
              alt="Foto-presentes personalizados Reflexus"
              width={1400}
              height={1400}
              className="h-[560px] w-full object-cover md:h-[640px]"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rotate-[4deg] rounded-xl bg-card p-3 shadow-card md:block">
            <div className="flex items-center gap-3 pr-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-sun/30">
                <BookHeart className="h-5 w-5 text-flame" />
              </div>
              <div>
                <div className="text-sm font-semibold">Feito à mão, com carinho</div>
                <div className="text-xs text-muted-foreground">Acabamento premium profissional</div>
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
  const items = ["Canecas", "Quadros em MDF", "Álbuns", "Porta-retratos", "Camisetas", "Aventais", "Chinelos", "Mousepads", "Quebra-cabeças", "Ímãs", "Chaveiros"];
  return (
    <div className="border-y border-border bg-cream py-4 overflow-hidden">
      <div className="flex gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-widest text-muted-foreground" style={{ animation: "marquee 35s linear infinite" }}>
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

type Product = {
  img: string;
  tag: string;
  title: string;
  desc: string;
  price: string;
  icon: typeof Coffee;
  span?: string;
};

function Catalog() {
  const products: Product[] = [
    {
      img: productMug,
      tag: "01 — Bebidas",
      title: "Canecas personalizadas",
      desc: "Cerâmica branca 325ml com sua foto favorita impressa em cores vibrantes. Resistente à máquina de lavar.",
      price: "a partir de R$ 39",
      icon: Coffee,
      span: "md:col-span-2",
    },
    {
      img: productFrame,
      tag: "02 — Decoração",
      title: "Porta-retratos & Quadros MDF",
      desc: "Molduras em madeira e quadros em MDF nos tamanhos 15x21, 20x30 e 30x40.",
      price: "a partir de R$ 49",
      icon: Frame,
    },
    {
      img: productAlbum,
      tag: "03 — Memórias",
      title: "Álbuns fotográficos",
      desc: "Capa dura em couro sintético, papel fotográfico Kodak, encadernação profissional.",
      price: "a partir de R$ 149",
      icon: BookHeart,
    },
    {
      img: productApparel,
      tag: "04 — Vestir",
      title: "Camisetas & Aventais",
      desc: "Estampa premium em algodão. Camisetas, aventais, ecobags e chinelos com sua foto.",
      price: "a partir de R$ 59",
      icon: Shirt,
    },
    {
      img: productGifts,
      tag: "05 — Presentear",
      title: "Quebra-cabeças & Mousepads",
      desc: "Quebra-cabeças de 60, 300 e 500 peças. Mousepads antiderrapantes personalizados.",
      price: "a partir de R$ 45",
      icon: Puzzle,
    },
    {
      img: productMagnet,
      tag: "06 — Miudezas",
      title: "Ímãs & Chaveiros",
      desc: "Ímãs de geladeira em formato polaroide e chaveiros acrílicos. Perfeitos para lembrancinhas.",
      price: "a partir de R$ 12",
      icon: Magnet,
      span: "md:col-span-2",
    },
  ];

  return (
    <section id="catalogo" className="bg-cream/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Catálogo</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Escolha o presente perfeito.</h2>
          </div>
          <a href={REVEAL_URL} className="hidden shrink-0 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline md:inline-flex">
            Encomendar agora →
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.title} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <a
      href={REVEAL_URL}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-warm ${product.span ?? ""}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-foreground">
          {product.tag}
        </div>
        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-gradient-warm text-primary-foreground shadow-warm">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="flex items-start justify-between gap-4 p-7">
        <div>
          <div className="font-serif text-2xl">{product.title}</div>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">{product.desc}</p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-sun/25 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-flame">
            {product.price}
          </div>
        </div>
        <div className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full bg-foreground text-background transition group-hover:bg-primary">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </a>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Escolha o produto", d: "Navegue pelo catálogo e selecione o que combina com a ocasião." },
    { n: "02", t: "Envie sua foto", d: "Faça upload direto do celular. Nossa equipe cuida do tratamento da imagem." },
    { n: "03", t: "Receba em casa", d: "Produção profissional em até 7 dias úteis com rastreio incluso." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">Como funciona</span>
        <h2 className="mt-4 text-4xl md:text-5xl">Da foto ao presente em 3 passos.</h2>
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

function Bundle() {
  const perks = [
    { icon: ShieldCheck, title: "Impressão premium", desc: "Cores vivas e acabamento durável em todos os produtos." },
    { icon: Truck, title: "Envio para todo Brasil", desc: "Embalagem protetora e rastreamento em cada pedido." },
    { icon: Sparkles, title: "Ideal para presentear", desc: "Aniversários, dia das mães, casamentos, bodas e Natal." },
  ];
  return (
    <section className="bg-foreground py-24 text-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-sun">Por que a Reflexus</span>
          <h2 className="mt-4 text-4xl md:text-5xl text-background">
            Presentes com <em className="not-italic text-gradient-warm">alma.</em>
          </h2>
          <p className="mt-6 text-background/70">
            Cada produto é impresso e montado com cuidado artesanal — porque a gente
            sabe que não é só um objeto: é a memória de quem você ama, para durar.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-lg bg-gradient-warm text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <div className="font-serif text-xl text-background">{p.title}</div>
              <p className="mt-2 text-sm text-background/60">{p.desc}</p>
            </div>
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
              Tem uma foto especial? Vira presente.
            </h2>
            <p className="mt-4 text-primary-foreground/90">
              Envie agora e receba em casa um presente único, feito com a foto de quem você ama.
            </p>
          </div>
          <a
            href={REVEAL_URL}
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-foreground px-8 py-5 text-base font-semibold text-background shadow-card transition hover:bg-background hover:text-foreground"
          >
            <Camera className="h-5 w-5" />
            Encomendar agora
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
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-2xl">Reflexus</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Digital</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Laboratório fotográfico digital. Há mais de 30 anos preservando memórias com a qualidade dos insumos Kodak.
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
            <li><Link to="/produtos" className="hover:text-foreground">Produtos</Link></li>
            <li><a href={REVEAL_URL} className="hover:text-foreground">Revelar fotos</a></li>
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
