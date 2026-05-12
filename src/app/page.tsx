import { LiquidGlass } from "@/components/ui/liquid-glass"

// ── Paleta documentada en globals.css ────────────────────────────────────────
const BRAND_SCALE = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
const ACCENT_SCALE = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const
const INK_SCALE = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const

const BRAND_HEX: Record<number, string> = {
  50: "#EEF2FF", 100: "#E0E7FF", 200: "#C7D2FE", 300: "#A5B4FC",
  400: "#818CF8", 500: "#6366F1", 600: "#4F46E5", 700: "#4338CA",
  800: "#3730A3", 900: "#312E81", 950: "#1E1B4B",
}
const ACCENT_HEX: Record<number, string> = {
  50: "#FFF1ED", 100: "#FFE0D4", 200: "#FFBFA8", 300: "#FF9572",
  400: "#FF6B3D", 500: "#FF5722", 600: "#ED4515", 700: "#C53711",
  800: "#9C2C0E", 900: "#7A220B",
}
const INK_HEX: Record<number, string> = {
  50: "#FAFAF9", 100: "#F5F5F4", 200: "#E7E5E4", 300: "#D6D3D1",
  400: "#A8A29E", 500: "#78716C", 600: "#57534E", 700: "#44403C",
  800: "#292524", 900: "#1C1917", 950: "#0C0A09",
}

function Swatch({ name, weight, hex }: { name: string; weight: number; hex: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="h-14 w-full rounded-xl border border-ink-200"
        style={{ backgroundColor: hex }}
        aria-label={`${name}-${weight}`}
      />
      <div className="flex items-baseline justify-between text-xs">
        <span className="font-medium text-ink-700">{name}-{weight}</span>
        <span className="font-mono text-ink-500">{hex}</span>
      </div>
    </div>
  )
}

export default function DesignSystemPreview() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">
      {/* Blobs de color para demostrar LiquidGlass */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-24 size-[480px] rounded-full bg-brand-300 opacity-50 blur-3xl" />
        <div className="absolute top-1/3 -right-24 size-[420px] rounded-full bg-accent-300 opacity-40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 size-[520px] rounded-full bg-brand-200 opacity-40 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-16 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-700">
            Paso 1 · Setup del sistema de diseño
          </p>
          <h1 className="font-sans text-4xl font-semibold tracking-tight text-ink-900 sm:text-6xl">
            Luupme <span className="font-serif italic font-normal text-brand-700">design system</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Preview de paleta, tipografía y componente <code className="font-mono text-sm text-accent-600">LiquidGlass</code> antes
            de construir las secciones de la landing. CTAs siempre en coral, brand azul solo para UI, success
            verde solo en métricas.
          </p>
        </header>

        {/* ── Tipografía ─────────────────────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-ink-500">
            Tipografía
          </h2>
          <LiquidGlass intensity="medium" className="p-8 sm:p-12">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-brand-700">
              Geist + Instrument Serif
            </p>
            <p className="font-sans text-3xl font-semibold tracking-tight text-ink-900 sm:text-5xl leading-[1.05]">
              Haz que tus clientes <span className="font-serif italic font-normal">regresen</span>.
              <br className="hidden sm:inline" /> Y gasten más.
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              Body en <span className="font-mono text-sm">Geist 400</span>. Headlines en Geist 600/700 con{" "}
              <code className="font-mono text-sm">tracking-tight</code>. Una palabra en{" "}
              <span className="font-serif italic">Instrument Serif italic</span> por headline. Más es ruido.
            </p>
          </LiquidGlass>
        </section>

        {/* ── Brand (azul) ───────────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-500">
            Brand — uso: links, badges, iconos
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-11">
            {BRAND_SCALE.map((w) => (
              <Swatch key={w} name="brand" weight={w} hex={BRAND_HEX[w]} />
            ))}
          </div>
        </section>

        {/* ── Accent (coral) ─────────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent-700">
            Accent — uso: CTAs SIEMPRE
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-10">
            {ACCENT_SCALE.map((w) => (
              <Swatch key={w} name="accent" weight={w} hex={ACCENT_HEX[w]} />
            ))}
          </div>
        </section>

        {/* ── Ink (neutros) ──────────────────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-500">
            Ink — neutros cálidos (texto, fondos, bordes)
          </h2>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-11">
            {INK_SCALE.map((w) => (
              <Swatch key={w} name="ink" weight={w} hex={INK_HEX[w]} />
            ))}
          </div>
        </section>

        {/* ── Tarjetas de regla CTA ──────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-ink-500">
            Regla del CTA
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <LiquidGlass intensity="light" className="p-6">
              <p className="mb-4 inline-block rounded-full bg-success-500/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-success-600">
                ✓ Correcto
              </p>
              <button className="mb-3 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-500/30 transition-all hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/40">
                Crea tu tarjeta gratis →
              </button>
              <p className="text-sm leading-relaxed text-ink-600">
                Coral <code className="font-mono">accent-500</code>. El color con CTR más alto documentado en SaaS. Urgencia sin agresividad.
              </p>
            </LiquidGlass>

            <LiquidGlass intensity="light" className="p-6">
              <p className="mb-4 inline-block rounded-full bg-red-500/10 px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-red-600">
                ✗ Evitar
              </p>
              <button className="mb-3 cursor-not-allowed rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white opacity-70">
                Empieza ahora
              </button>
              <p className="text-sm leading-relaxed text-ink-600">
                Azul <code className="font-mono">brand-600</code> en CTAs convierte menos. El azul comunica
                confianza, pero no urgencia. Reservado para UI.
              </p>
            </LiquidGlass>
          </div>
        </section>

        {/* ── LiquidGlass intensities ────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-ink-500">
            LiquidGlass · 3 intensidades
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {(["light", "medium", "heavy"] as const).map((intensity) => (
              <LiquidGlass key={intensity} intensity={intensity} className="p-6">
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-brand-700">
                  intensity="{intensity}"
                </p>
                <p className="font-sans text-lg font-semibold text-ink-900">
                  Cristal <span className="font-serif italic font-normal">{intensity}</span>
                </p>
                <p className="mt-2 text-sm text-ink-600">
                  Necesita color detrás para verse bien. Sobre blanco plano se ve mal.
                </p>
              </LiquidGlass>
            ))}
          </div>
        </section>

        {/* ── Stack status ───────────────────────────────────────────────── */}
        <footer className="mt-16 border-t border-ink-200 pt-8 text-sm text-ink-500">
          <p>
            Paso 1 / 6 completado. Siguiente:{" "}
            <span className="font-medium text-ink-700">Paso 2 — Layout (Nav + Footer)</span>.
          </p>
        </footer>
      </div>
    </main>
  )
}
