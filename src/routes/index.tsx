import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import logoInshad from "@/assets/logo-inshad.asset.json";
import logoMin from "@/assets/logo-ministere.asset.json";
import hero from "@/assets/hero-constantine.webp";
import stampImg from "@/assets/bridge-stamp.webp";
import oud from "@/assets/oud.webp";
import theater from "@/assets/theater.webp";
import pattern from "@/assets/pattern.webp";
import {
  nights, countries, bridges, roadmap, labTabs, archive, initiatives, pavilions, artisans, partners, lyrics, ui, type Lang, type T,
} from "@/lib/festival-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "المهرجان الثقافي الدولي للإنشاد — الدورة 12 | قسنطينة" },
      { name: "description", content: "Festival Culturel International de l'Inshad, 12ᵉ édition à Constantine : 5 soirées, scènes-ponts, tramway qui chante, labo IA et mémoire numérique." },
      { property: "og:title", content: "Festival International de l'Inshad — 12ᵉ édition, Constantine" },
      { property: "og:description", content: "Inshad et innovation : vers un festival culturel durable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [lang, setLang] = useState<Lang>("ar");
  const [sing, setSing] = useState(false);
  const [ticket, setTicket] = useState<number | null>(null);
  const [talent, setTalent] = useState<string | null>(null);
  const t = (x: T) => x[lang];
  const dir = lang === "ar" ? "rtl" : "ltr";
  useEffect(() => { document.documentElement.lang = lang; document.documentElement.dir = dir; }, [lang, dir]);

  return (
    <div dir={dir} className="paper min-h-screen overflow-x-hidden text-foreground">
      {/* top bar */}
      <div className="bg-wine py-1.5 text-center text-xs text-primary-foreground/80">{t(ui.republic)}</div>
      <nav className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2">
          <img src={logoInshad.url} alt="Logo Inshad" className="h-12 w-auto" />
          <img src={logoMin.url} alt="Ministère de la Culture" className="h-12 w-auto" />
          <div className="ms-4 hidden gap-5 text-sm font-medium lg:flex">
            {[["program", ui.nProgram], ["city", ui.nCity], ["lab", ui.nLab], ["digital", ui.nDigital], ["expo", ui.nExpo]].map(([id, l]) => (
              <a key={id as string} href={`#${id}`} className="hover:text-accent-foreground hover:underline decoration-gold underline-offset-4">{t(l as T)}</a>
            ))}
          </div>
          <div className="ms-auto flex items-center gap-2">
            <button onClick={() => setSing(true)} className="rounded-sm bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-wine">♪ {t(ui.qr)}</button>
            <div className="flex overflow-hidden rounded-sm border border-border text-xs">
              {(["ar", "fr", "en"] as Lang[]).map((l) => (
                <button key={l} onClick={() => setLang(l)} className={`px-2 py-1.5 uppercase ${lang === l ? "bg-accent text-accent-foreground font-bold" : "hover:bg-muted"}`}>{l}</button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* hero */}
      <header className="relative overflow-hidden bg-wine text-primary-foreground">
        <img src={hero} alt="Constantine" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-wine via-wine/40 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-32 pt-20 md:grid-cols-[1.3fr_1fr] md:pt-28">
          <div>
            <span className="inline-block rotate-[-2deg] border-2 border-gold px-3 py-1 text-sm font-bold text-gold">{t(ui.edition)}</span>
            <h1 className={`mt-6 text-5xl md:text-7xl ${lang === "ar" ? "leading-[1.3]" : "headline"}`}>{t(ui.title)}</h1>
            <p className="mt-5 max-w-xl text-xl text-gold md:text-2xl" style={{ fontFamily: "var(--font-arabic)" }}>« {t(ui.theme)} »</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#program" className="rounded-sm bg-gold px-5 py-3 font-semibold text-accent-foreground hover:brightness-110">{t(ui.ctaProgram)}</a>
              <a href="#digital" className="rounded-sm border border-primary-foreground/60 px-5 py-3 font-semibold hover:bg-primary-foreground/10">{t(ui.ctaDigital)}</a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="stamp animate-floaty absolute end-0 top-0 w-72 rotate-3 shadow-2xl"><img src={stampImg} alt="Pont Sidi M'Cid" /></div>
          </div>
        </div>
      </header>

      {/* metrics */}
      <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border shadow-xl md:grid-cols-4">
          {[["5", ui.m1], ["7", ui.m2], ["4", ui.m3], ["AI", ui.m4]].map(([n, l]) => (
            <div key={n as string} className="bg-card p-5 text-center">
              <div className="headline text-4xl text-primary">{n as string}</div>
              <div className="mt-1 text-sm text-muted-foreground">{t(l as T)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* flags */}
      <div className="mt-12 overflow-hidden border-y border-border bg-card py-3">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4 text-sm">
          {countries.map(([f, n]) => <span key={f} className="whitespace-nowrap">{f} {t(n)}</span>)}
        </div>
      </div>

      <Program lang={lang} onTicket={setTicket} />
      <City lang={lang} />
      <Lab lang={lang} />
      <Digital lang={lang} onApply={setTalent} />
      <Expo lang={lang} />

      <footer className="relative mt-24 bg-wine text-primary-foreground">
        <div className="h-6 w-full" style={{ backgroundImage: `url(${pattern})`, backgroundSize: "120px" }} />
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="text-3xl text-gold">{t(ui.partnersT)}</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {partners.map((p) => <div key={p.fr} className="border border-primary-foreground/20 p-4 text-sm">{t(p)}</div>)}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-primary-foreground/20 pt-6 text-sm text-primary-foreground/70">
            <img src={logoInshad.url} alt="" className="h-14" /><img src={logoMin.url} alt="" className="h-14" />
            <span>{t(ui.organizer)} — {t(ui.edition)}</span>
          </div>
        </div>
      </footer>

      {sing && <SingAlong lang={lang} onClose={() => setSing(false)} />}
      {ticket !== null && (
        <Modal onClose={() => setTicket(null)} lang={lang}>
          <div className="stamp mx-auto w-72">
            <div className="border-2 border-dashed border-primary p-5 text-center">
              <img src={logoInshad.url} alt="" className="mx-auto h-16" />
              <div className="mt-2 text-xs text-muted-foreground">{t(ui.edition)}</div>
              <div className="headline mt-2 text-2xl text-primary">{t(ui.night)} {ticket}</div>
              <div className="mt-1 text-sm">{t(nights[ticket - 1]!.title)}</div>
              <QR />
              <div className="text-xs text-muted-foreground">المسرح الجهوي محمد الطاهر فرقاني</div>
              <button onClick={() => { setTicket(null); setSing(true); }} className="mt-3 text-sm font-semibold text-primary underline">♪ {t(ui.singTitle)}</button>
            </div>
          </div>
        </Modal>
      )}
      {talent && <TalentForm lang={lang} initiative={talent} onClose={() => setTalent(null)} />}
    </div>
  );
}

function Section({ id, kicker, children, className = "" }: { id: string; kicker: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`mx-auto max-w-7xl scroll-mt-20 px-4 pt-24 ${className}`}>
      <div className="mb-8 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
        <span className="h-px w-10 bg-gold" />{kicker}
      </div>
      {children}
    </section>
  );
}

function Program({ lang, onTicket }: { lang: Lang; onTicket: (n: number) => void }) {
  const [sel, setSel] = useState(0);
  const n = nights[sel]!;
  return (
    <Section id="program" kicker={ui.ax1[lang]}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div className="relative">
          <img src={oud} alt="Oud" className="w-full mix-blend-multiply" />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {nights.map((x, i) => (
              <button key={x.n} onClick={() => setSel(i)} className={`border px-4 py-2 text-sm font-semibold ${i === sel ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-gold"}`}>
                {ui.night[lang]} {x.n}
              </button>
            ))}
          </div>
          <div className="tape mt-8 bg-card p-8 shadow-lg">
            <div className="headline text-7xl text-gold">0{n.n}</div>
            <h3 className="mt-2 text-3xl text-primary">{n.title[lang]}</h3>
            <ul className="mt-5 space-y-3">
              {n.parts.map((p) => <li key={p.fr} className="flex gap-3"><span className="text-gold">✦</span>{p[lang]}</li>)}
            </ul>
            <button onClick={() => onTicket(n.n)} className="mt-6 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-wine">▣ {ui.ticket[lang]}</button>
          </div>
          <div className="mt-6 border-s-4 border-gold bg-secondary p-4 text-sm text-secondary-foreground">⚖ {ui.legal[lang]}</div>
        </div>
      </div>
    </Section>
  );
}

function City({ lang }: { lang: Lang }) {
  return (
    <Section id="city" kicker={ui.ax23[lang]}>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="polaroid rotate-[-2deg]">
          <img src={theater} alt="Théâtre régional de Constantine" className="aspect-square w-full object-cover" />
          <h3 className="mt-4 text-2xl text-primary">{ui.citySings[lang]}</h3>
          <p className="text-sm text-muted-foreground">{ui.citySingsD[lang]}</p>
        </div>
        <div className="flex flex-col justify-between bg-emerald p-8 text-primary-foreground shadow-lg md:col-span-2">
          <div>
            <div className="text-5xl">🚋</div>
            <h3 className="mt-3 text-4xl">{ui.tram[lang]}</h3>
            <p className="mt-3 max-w-lg text-primary-foreground/85">{ui.tramD[lang]}</p>
          </div>
          <div className="mt-6 flex items-center gap-4"><div className="w-24 bg-card p-1"><QR small /></div><span className="text-sm text-gold">SETRAM × Inshad</span></div>
        </div>
      </div>
      <div className="mt-10 grid gap-8 bg-wine p-8 text-primary-foreground md:grid-cols-[1fr_1.2fr]" style={{ backgroundImage: `linear-gradient(var(--wine), oklch(0.24 0.08 10 / 88%)), url(${pattern})`, backgroundSize: "auto, 200px" }}>
        <div className="stamp rotate-2"><img src={stampImg} alt="Pont" /></div>
        <div>
          <h3 className="text-4xl text-gold">{ui.bridgesT[lang]}</h3>
          <p className="mt-2 text-primary-foreground/80">{ui.bridgesD[lang]}</p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {bridges.map((b, i) => <div key={b.fr} className="border border-gold/40 p-3"><span className="text-gold">0{i + 1}</span> {b[lang]}</div>)}
          </div>
          <h4 className="mt-8 font-semibold text-gold">{ui.roadmapT[lang]}</h4>
          <ol className="mt-3 grid grid-cols-2 gap-2 text-sm md:grid-cols-4">
            {roadmap.map((r, i) => <li key={r.fr} className="border-t-2 border-gold pt-2">{i + 1}. {r[lang]}</li>)}
          </ol>
        </div>
      </div>
    </Section>
  );
}

function Lab({ lang }: { lang: Lang }) {
  const [tab, setTab] = useState(0);
  return (
    <Section id="lab" kicker={ui.ax45[lang]}>
      <p className="max-w-3xl text-2xl text-primary" style={{ fontFamily: "var(--font-arabic)" }}>{ui.uni[lang]}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-[260px_1fr]">
        <div className="flex flex-col gap-2">
          {labTabs.map((x, i) => (
            <button key={x.title.fr} onClick={() => setTab(i)} className={`border-s-4 p-3 text-start text-sm font-semibold ${i === tab ? "border-gold bg-card shadow" : "border-transparent hover:bg-card/60"}`}>{x.title[lang]}</button>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {labTabs[tab]!.items.map((it, i) => (
            <div key={it.fr} className="bg-card p-6 shadow-sm"><div className="headline text-3xl text-gold">{String(i + 1).padStart(2, "0")}</div><p className="mt-2">{it[lang]}</p></div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Digital({ lang, onApply }: { lang: Lang; onApply: (s: string) => void }) {
  const [q, setQ] = useState(""); const [c, setC] = useState(""); const [m, setM] = useState(""); const [playing, setPlaying] = useState<string | null>(null);
  const list = useMemo(() => archive.filter((a) => a.title.toLowerCase().includes(q.toLowerCase()) && (!c || a.country === c) && (!m || a.maqam === m)), [q, c, m]);
  const sel = "border border-border bg-card px-3 py-2 text-sm";
  return (
    <Section id="digital" kicker={ui.ax6[lang]}>
      <h3 className="text-4xl text-primary">{ui.archiveT[lang]}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={ui.search[lang]} className={`${sel} flex-1`} />
        <select value={c} onChange={(e) => setC(e.target.value)} className={sel}><option value="">{ui.all[lang]}</option>{[...new Set(archive.map((a) => a.country))].map((x) => <option key={x}>{x}</option>)}</select>
        <select value={m} onChange={(e) => setM(e.target.value)} className={sel}><option value="">Maqam</option>{[...new Set(archive.map((a) => a.maqam))].map((x) => <option key={x}>{x}</option>)}</select>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {list.map((a) => (
          <div key={a.title} className="flex items-center gap-4 bg-card p-4 shadow-sm">
            <button onClick={() => setPlaying(playing === a.title ? null : a.title)} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">{playing === a.title ? "❚❚" : "▶"}</button>
            <div className="flex-1">
              <div className="font-semibold">{a.title}</div>
              <div className="text-xs text-muted-foreground">{a.year} · {a.country} · Maqam {a.maqam}</div>
              {playing === a.title && <div className="mt-2 h-1 overflow-hidden bg-muted"><div className="h-full w-1/3 animate-pulse bg-gold" /></div>}
            </div>
            <span className="border border-gold px-2 py-0.5 text-[10px] text-primary">© Inshad Archive</span>
          </div>
        ))}
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-4">
        {initiatives.map((x, i) => (
          <div key={x.fr} className={`polaroid flex flex-col ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
            <div className="grid aspect-[4/3] place-items-center bg-wine text-4xl text-gold" style={{ backgroundImage: `linear-gradient(oklch(0.24 0.08 10 / 80%), oklch(0.24 0.08 10 / 80%)), url(${pattern})`, backgroundSize: "auto, 120px" }}>🎙</div>
            <h4 className="mt-3 flex-1 font-semibold text-primary">{x[lang]}</h4>
            <button onClick={() => onApply(x[lang])} className="mt-3 bg-gold px-3 py-2 text-sm font-semibold text-accent-foreground">{ui.submit[lang]}</button>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Expo({ lang }: { lang: Lang }) {
  const [p, setP] = useState<number | null>(null); const [q, setQ] = useState("");
  const list = artisans.filter((a) => (p === null || a.pav === p) && (a.name + a.craft).toLowerCase().includes(q.toLowerCase()));
  return (
    <Section id="expo" kicker={ui.ax7[lang]}>
      <div className="grid gap-3 md:grid-cols-4">
        {pavilions.map((x, i) => (
          <button key={x.fr} onClick={() => setP(p === i ? null : i)} className={`p-5 text-start ${p === i ? "bg-primary text-primary-foreground" : "bg-card hover:shadow-md"}`}>
            <div className="headline text-3xl text-gold">P{i + 1}</div><div className="mt-1 font-semibold">{x[lang]}</div>
          </button>
        ))}
      </div>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={ui.search[lang]} className="mt-5 w-full border border-border bg-card px-3 py-2 text-sm" />
      <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
        {list.map((a) => <div key={a.name} className="border-t-2 border-gold bg-card p-4"><div className="font-semibold">{a.name}</div><div className="text-xs text-muted-foreground">{a.craft} · {pavilions[a.pav]![lang]}</div></div>)}
      </div>
    </Section>
  );
}

function Modal({ children, onClose, lang }: { children: ReactNode; onClose: () => void; lang: Lang }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-wine/80 p-4" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md">
        {children}
        <button onClick={onClose} className="mx-auto mt-4 block text-sm text-primary-foreground underline">{ui.close[lang]}</button>
      </div>
    </div>
  );
}

function QR({ small }: { small?: boolean }) {
  const cells = useMemo(() => Array.from({ length: 121 }, (_, i) => ((i * 7919) % 13) % 3 === 0 || [0,1,2,11,12,13,22,23,24,8,9,10,19,20,21,30,31,32,88,89,90,99,100,101,110,111,112].includes(i)), []);
  return <div className={`mx-auto my-3 grid grid-cols-11 gap-px ${small ? "w-full" : "w-32"}`}>{cells.map((on, i) => <div key={i} className={`aspect-square ${on ? "bg-foreground" : "bg-card"}`} />)}</div>;
}

function SingAlong({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const [i, setI] = useState(0); const [play, setPlay] = useState(true); const [tempo, setTempo] = useState(3);
  useEffect(() => { if (!play) return; const id = setInterval(() => setI((x) => (x + 1) % lyrics.length), tempo * 1000); return () => clearInterval(id); }, [play, tempo]);
  return (
    <Modal onClose={onClose} lang={lang}>
      <div className="mx-auto w-80 rounded-[2.5rem] border-8 border-foreground bg-wine p-6 text-primary-foreground shadow-2xl">
        <div className="text-center text-xs text-gold">♪ {ui.singTitle[lang]} — QR</div>
        <div dir="rtl" className="mt-6 flex h-72 flex-col justify-center gap-3 text-center" style={{ fontFamily: "var(--font-arabic)" }}>
          {[-1, 0, 1].map((o) => { const k = (i + o + lyrics.length) % lyrics.length; return <p key={o} className={o === 0 ? "text-3xl text-gold transition-all" : "text-lg opacity-40"}>{lyrics[k]}</p>; })}
        </div>
        <div className="flex items-center justify-between gap-2">
          <button onClick={() => setI((x) => (x - 1 + lyrics.length) % lyrics.length)} className="px-2">⏮</button>
          <button onClick={() => setPlay(!play)} className="rounded-full bg-gold px-4 py-1 text-sm font-bold text-accent-foreground">{play ? ui.pause[lang] : ui.play[lang]}</button>
          <button onClick={() => setI((x) => (x + 1) % lyrics.length)} className="px-2">⏭</button>
        </div>
        <label className="mt-4 block text-xs">{ui.tempo[lang]}: {tempo}s
          <input type="range" min={1} max={6} value={tempo} onChange={(e) => setTempo(+e.target.value)} className="w-full accent-gold" />
        </label>
      </div>
    </Modal>
  );
}

function TalentForm({ lang, initiative, onClose }: { lang: Lang; initiative: string; onClose: () => void }) {
  const [done, setDone] = useState(false);
  const f = "w-full border border-border bg-background px-3 py-2 text-sm";
  return (
    <Modal onClose={onClose} lang={lang}>
      <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="tape space-y-3 bg-card p-6 shadow-xl">
        <h3 className="text-2xl text-primary">{initiative}</h3>
        {done ? <p className="py-6 text-center text-lg">✦ {ui.thanks[lang]}</p> : <>
          <input required placeholder={ui.name[lang]} className={f} />
          <input required type="email" placeholder="Email" className={f} />
          <input required placeholder={ui.country[lang]} className={f} />
          <input required type="url" placeholder={ui.link[lang]} className={f} />
          <button className="w-full bg-primary py-2 font-semibold text-primary-foreground">{ui.send[lang]}</button>
        </>}
      </form>
    </Modal>
  );
}
