"use client"

import React, { useEffect, useRef, useState } from "react"
import { CosmicButton } from "@/components/ui/cosmic-button"
import { GradientHeading } from "@/components/ui/gradient-heading"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { LogoCarousel } from "@/components/ui/logo-carousel"
import { ShiftCard } from "@/components/ui/shift-card"
import {
  HeroStaticRadialGradientRoot,
  HeroStaticRadialGradientMobileVisual,
} from "@/components/ui/hero-static-radial-gradient"

// ── Paleta ───────────────────────────────────────────────────────────────────
const INDIGO = "#4338CA"
const VIOLET = "#7C3AED"
const AMBER  = "#F59E0B"

// ── Logo placeholders SVG ────────────────────────────────────────────────────
function mkLogo(label: string, color = INDIGO) {
  return function Logo(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <rect width="120" height="40" rx="6" fill={color} fillOpacity="0.08" />
        <text x="60" y="26" textAnchor="middle" fill={color} fontSize="12" fontWeight="700" fontFamily="system-ui">
          {label}
        </text>
      </svg>
    )
  }
}

const LOGOS = [
  { id: 1, name: "Heladería Sol",     img: mkLogo("Heladería Sol",  INDIGO) },
  { id: 2, name: "Ramen Nori",        img: mkLogo("Ramen Nori",     VIOLET) },
  { id: 3, name: "Café Piedra",       img: mkLogo("Café Piedra",    INDIGO) },
  { id: 4, name: "Pizzería Roma",     img: mkLogo("Pizzería Roma",  VIOLET) },
  { id: 5, name: "Vinos Norte",       img: mkLogo("Vinos Norte",    AMBER)  },
  { id: 6, name: "Sushi Azul",        img: mkLogo("Sushi Azul",     INDIGO) },
  { id: 7, name: "El Pedregal",       img: mkLogo("El Pedregal",    VIOLET) },
  { id: 8, name: "Lumbre Pan",        img: mkLogo("Lumbre",         AMBER)  },
]

// ── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "💳", title: "Cashback",    desc: "Devuelve un % de cada compra a tu cliente.",         detail: "Configura el % por categoría. Tu cliente lo ve en tiempo real desde su tarjeta digital." },
  { icon: "🏆", title: "Sellos",      desc: "Compra 9 y llévate el décimo gratis.",                detail: "El sistema más efectivo para consumo frecuente. Cada visita suma automáticamente." },
  { icon: "⭐", title: "Puntos",      desc: "Acumula puntos por cada peso gastado.",               detail: "Tú defines la tasa y los premios. Los puntos no vencen hasta que tú lo decidas." },
  { icon: "👑", title: "Membresía",   desc: "Crea tu club VIP con beneficios exclusivos.",         detail: "Diferencia a tus mejores clientes. Acceso anticipado, descuentos, trato prioritario." },
  { icon: "🎟️", title: "Cupón",      desc: "Genera cupones de descuento segmentados.",            detail: "Envía cupones según historial de compra. Sin impresiones, sin fraudes." },
  { icon: "🎁", title: "Gift Card",   desc: "Tarjetas de regalo 100% digitales.",                  detail: "Tu cliente las compra, las comparte y las canjea desde el celular. Cero plástico." },
  { icon: "📲", title: "Push Notif.", desc: "Llega al celular de tu cliente en segundos.",         detail: "Tasa de apertura 8x mayor que el email. Segmentada por comportamiento." },
  { icon: "🗺️", title: "Geo-notif.", desc: "Notifica cuando tu cliente está cerca.",              detail: "Activa una oferta cuando un cliente pasa a 200m. Magia de conversión." },
]

// ── Steps ─────────────────────────────────────────────────────────────────────
const STEPS = [
  { n: "01", title: "Crea tu cuenta",        desc: "Registro en menos de 5 minutos. Sin tarjeta requerida." },
  { n: "02", title: "Diseña tu programa",    desc: "Elige cashback, sellos, puntos o membresía. O combínalos." },
  { n: "03", title: "Personaliza tu tarjeta",desc: "Colores, logo y nombre de tu negocio en segundos." },
  { n: "04", title: "Comparte el link",       desc: "Tus clientes se registran escaneando un QR desde su celular." },
  { n: "05", title: "Gestiona tu base",       desc: "Ve quién compra, cuánto gasta y qué los motiva a volver." },
  { n: "06", title: "Crece con datos",        desc: "Recibe reportes semanales y actúa sobre lo que funciona." },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
const FAQ = [
  { q: "¿Mis clientes necesitan descargar una app?",    a: "No. Funciona desde el navegador del celular. Sin descargas, sin fricciones." },
  { q: "¿Cuánto tiempo tarda en estar listo?",          a: "En menos de 30 minutos tienes tu programa activo y tu primer cliente registrado." },
  { q: "¿Puedo tener varios negocios en una cuenta?",   a: "Sí. Gestiona múltiples sucursales desde un solo dashboard." },
  { q: "¿Qué pasa si cancelo?",                         a: "Tus datos son tuyos. Puedes exportarlos en cualquier momento." },
  { q: "¿Funciona para cualquier tipo de negocio?",     a: "Sí: restaurantes, cafeterías, tiendas, estéticas, ferreterías. Si tienes clientes recurrentes, Luupme funciona." },
  { q: "¿Cómo saben mis clientes cuántos puntos tienen?", a: "Reciben una notificación después de cada transacción y pueden revisar su saldo cuando quieran." },
  { q: "¿Necesito equipo de cómputo en mi negocio?",   a: "No. Opera Luupme desde tu celular. El cajero registra compras en 2 taps." },
]

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{q}</span>
        <span className={`text-primary text-xl transition-transform duration-200 flex-shrink-0 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <p className="pb-5 text-muted-foreground leading-relaxed text-sm sm:text-base">{a}</p>}
    </div>
  )
}

// ── Stat animada ──────────────────────────────────────────────────────────────
function StatBadge({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect() } }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading font-black text-4xl sm:text-5xl text-primary mb-1 flex items-baseline justify-center gap-0.5">
        {active ? <AnimatedNumber value={value} /> : <span>0</span>}
        <span>{suffix}</span>
      </p>
      <p className="text-muted-foreground text-sm max-w-[160px] mx-auto leading-snug">{label}</p>
    </div>
  )
}

// ── Navbar ─────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", fn, { passive: true })
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const links = [["#como-funciona", "Cómo funciona"], ["#precios", "Precios"], ["#faq", "Dudas"]] as const

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-heading font-black text-2xl tracking-tight text-foreground select-none">
          LUUPME
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{label}</a>
          ))}
          <CosmicButton as="a" href="#registro">Prueba gratis</CosmicButton>
        </div>
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setMenuOpen((o) => !o)} aria-label="Menú">
          <span className={`block w-5 h-0.5 bg-foreground rounded transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground rounded transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground rounded transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-background border-t border-border ${menuOpen ? "max-h-60" : "max-h-0"}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(([href, label]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted-foreground" onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <CosmicButton as="a" href="#registro" className="self-start">Prueba gratis</CosmicButton>
        </div>
      </div>
    </nav>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default function LuupmeLanding() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <HeroStaticRadialGradientRoot
        className="min-h-screen pt-20"
        desktopShaderProps={{ colors: [INDIGO, VIOLET, AMBER], colorBack: "#FAF9F700", radius: 0.85, falloff: 0.75, mixing: 0.55, grainMixer: 0.8, grainOverlay: 0.25 }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-20 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary mb-8">
            ✦ Programa de lealtad 100% digital
          </div>

          <GradientHeading asChild size="xxl" weight="black" className="mb-6">
            <h1>El mejor programa<br className="hidden sm:block" /> de lealtad<br className="hidden sm:block" /> para tus clientes</h1>
          </GradientHeading>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Haz que tus clientes regresen una y otra vez.{" "}
            <strong className="text-foreground">Sin apps. Sin plástico. Sin complicaciones.</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <CosmicButton as="a" href="#registro">
              🚀 Prueba Gratuita 14 días
            </CosmicButton>
            <a href="#como-funciona" className="text-sm font-semibold text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
              Ver cómo funciona →
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-lg mx-auto">
            <StatBadge value={2}  suffix="x"     label="Más retención de clientes" />
            <StatBadge value={30} suffix="%"     label="Aumento del gasto promedio" />
            <div className="col-span-2 sm:col-span-1">
              <StatBadge value={14} suffix=" días" label="Prueba gratis sin tarjeta" />
            </div>
          </div>
        </div>

        <HeroStaticRadialGradientMobileVisual
          mobileShaderProps={{ colors: [INDIGO, VIOLET, AMBER], colorBack: "#FAF9F700", radius: 0.85, falloff: 0.75, mixing: 0.55 }}
        />
      </HeroStaticRadialGradientRoot>

      {/* ══ LOGOS ═════════════════════════════════════════════════════════════ */}
      <section className="py-14 border-y border-border bg-muted/30">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
          Negocios que ya usan Luupme
        </p>
        <LogoCarousel columnCount={4} />
      </section>

      {/* ══ FEATURES ══════════════════════════════════════════════════════════ */}
      <section id="como-funciona" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <GradientHeading size="lg" weight="bold" className="mb-4">
              Todo lo que necesitas en un solo lugar
            </GradientHeading>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Elige el programa que mejor se adapta a tu negocio — o combínalos.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {FEATURES.map((f) => (
              <ShiftCard
                key={f.title}
                className="w-full"
                topContent={<div className="text-3xl mb-3">{f.icon}</div>}
                middleContent={
                  <div>
                    <p className="font-heading font-bold text-base text-foreground mb-1">{f.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                }
                topAnimateContent={<div className="text-3xl mb-3 opacity-80">{f.icon}</div>}
                bottomContent={<p className="text-xs text-primary/80 leading-relaxed">{f.detail}</p>}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURE: NOTIFICACIONES ════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Retención inteligente</p>
            <GradientHeading size="md" weight="bold" className="mb-5">
              Llega al celular de tu cliente en segundos
            </GradientHeading>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Push notifications, mensajes de cumpleaños y geo-alertas.{" "}
              <strong className="text-foreground">8x más apertura que el email.</strong>
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["📲 Push notifications directas al celular", "🎂 Felicitaciones automáticas de cumpleaños", "🗺️ Alertas cuando el cliente está cerca", "⭐ Solicitud de reseña en Google automática"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border h-72 flex items-center justify-center">
            <span className="text-7xl">📱</span>
          </div>
        </div>
      </section>

      {/* ══ FEATURE: REFERIDOS ════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 rounded-3xl bg-gradient-to-br from-accent/10 to-primary/10 border border-border h-72 flex items-center justify-center">
            <span className="text-7xl">🤝</span>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Crecimiento orgánico</p>
            <GradientHeading size="md" weight="bold" className="mb-5">
              Tus clientes traen a sus amigos
            </GradientHeading>
            <p className="text-muted-foreground leading-relaxed mb-6">
              El programa de referidos convierte a tus mejores clientes en embajadores.
              Cada amigo referido genera puntos — sin costo extra para ti.
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["🔗 Link único por cliente", "🎯 Recompensa automática al primer canje", "📊 Tracking de referidos en tu dashboard", "💬 Compartible en WhatsApp e Instagram"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ SETUP ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary-foreground/50 mb-4">Listo en minutos</p>
            <h2 className="font-heading font-black text-3xl sm:text-5xl mb-4">6 pasos para empezar</h2>
            <p className="text-primary-foreground/60 text-lg">Sin integración técnica. Sin consultores.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-colors">
                <p className="font-heading font-black text-4xl text-accent mb-3">{s.n}</p>
                <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ═══════════════════════════════════════════════════════════════ */}
      <section id="faq" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <GradientHeading size="lg" weight="bold" className="mb-4">Preguntas frecuentes</GradientHeading>
          </div>
          <div className="divide-y divide-border rounded-2xl border border-border px-6">
            {FAQ.map((item) => <FaqItem key={item.q} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══════════════════════════════════════════════════════════ */}
      <section id="registro" className="py-28 px-6 bg-gradient-to-br from-primary via-primary to-[#6D28D9] text-primary-foreground text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-6">✦</div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl mb-6 leading-tight">
            Empieza hoy.<br className="hidden sm:block" /> Tus clientes te lo agradecerán.
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10">
            14 días gratis. Sin tarjeta de crédito. Cancela cuando quieras.
          </p>
          <div className="flex justify-center">
            <CosmicButton as="a" href="https://app.luupme.com/registro">
              🚀 Crear mi programa de lealtad
            </CosmicButton>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ════════════════════════════════════════════════════════════ */}
      <footer id="contacto" className="bg-foreground text-background py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-10">
            <div>
              <p className="font-heading font-black text-2xl mb-1">LUUPME</p>
              <p className="text-background/50 text-xs leading-relaxed">
                by Systemmex · Saltillo, Coahuila, México<br />
                Retención y fidelización para negocios locales
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-background/60">
              {[["#como-funciona","Cómo funciona"],["#faq","FAQ"],["/privacidad","Privacidad"]].map(([href, label]) => (
                <a key={href} href={href} className="hover:text-background transition-colors">{label}</a>
              ))}
            </nav>
          </div>
          <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-background/40">
            <span>© {new Date().getFullYear()} Luupme. Todos los derechos reservados.</span>
            <a href="mailto:contacto@luupme.com" className="hover:text-background transition-colors">contacto@luupme.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
