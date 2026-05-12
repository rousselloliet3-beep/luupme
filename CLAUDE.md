# LUUPME — Contexto del Proyecto

## Qué es Luupme

Luupme es una plataforma de **fidelización y retención de clientes 100% digital**. Permite a negocios crear **tarjetas digitales inteligentes** (sellos, puntos, cashback, VIP, cupones, gift cards) que viven en el celular del cliente — sin apps pesadas, sin tarjetas físicas, sin fricción.

El cliente escanea un QR, se registra en menos de 15 segundos y la tarjeta queda guardada en su celular. El negocio gana una base de datos real + canal directo para notificaciones push, geo-notificaciones, automatizaciones de cumpleaños, reseñas y referidos.

## Lo que realmente vendemos (importante para copy)

**NO vendemos "tarjetas digitales".** Vendemos:
- Recurrencia
- Conexión emocional con el cliente
- Recordación de marca
- Automatización de lealtad
- Comunidad de clientes frecuentes

El dolor que resolvemos: *"los clientes compran una vez y no vuelven, gasto en ads para conseguir nuevos pero no retengo a los que ya tengo"*.

Resultados que prometemos:
- Hasta **2x retención** de clientes
- Hasta **+30% gasto promedio**

## Audiencia (a quién le hablamos)

Dueños de negocios con clientes recurrentes y experiencia física:
- Cafeterías, restaurantes, snacks, repostería
- Barberías, salones, estéticas, spas
- Gimnasios, clínicas
- Tiendas, negocios de eventos

Perfil: dueño/a pequeño-mediano, 25-50 años, ya usa Instagram pero siente que "no le rinde", probablemente intentó un programa de lealtad con sellitos de papel. **No es tech-savvy** pero sí tiene smartphone. Habla español (México principalmente).

## Tono de voz

- **Directo y claro** — nada de jerga corporativa ni "soluciones omnicanal"
- **Cálido pero profesional** — hablamos de "tu negocio", "tus clientes"
- **Orientado a resultados concretos** — números, ejemplos reales, beneficios tangibles
- **Confianza sin arrogancia** — somos la herramienta, el héroe es el dueño del negocio
- Emojis: con moderación, solo donde aporten (✅ en bullets de beneficios, ❌ en lista de problemas). Nunca decorativos.

Headlines tipo:
- "Haz que tus clientes regresen. Y gasten más."
- "Tu programa de lealtad, sin la fricción."
- "Convierte clientes ocasionales en clientes frecuentes."

Evitar:
- "Revoluciona tu negocio"
- "La solución #1 en..."
- "Potencia tu engagement"

## Identidad visual

### Paleta (definida en globals.css como tokens `@theme inline`)

| Escala | Uso | Tokens clave |
|---|---|---|
| `brand-*` (azul `#6366F1` base) | Links, badges, iconos, elementos de UI. **NUNCA en CTAs.** | `brand-600` primario UI |
| `accent-*` (coral `#FF5722` base) | **CTAs SIEMPRE.** Nunca azul, nunca gradiente. | `accent-500` CTA principal |
| `success-*` (verde `#10B981`) | Solo métricas y checks ("+30%", "2x"). | `success-500` |
| `ink-*` (neutros cálidos) | Texto, fondos, bordes. Más premium que slate frío. | `ink-50` bg, `ink-900` texto |

Tokens shadcn (`--primary`, `--accent`, etc.) mapeados al sistema:
- `--primary` → `brand-600` (UI)
- `--accent` → `accent-500` (CTAs)
- `--background` → `ink-50`
- `--foreground` → `ink-900`

### Tipografía
- **Body y UI:** Geist (var `--font-sans` / `--font-geist`), weight 400-500
- **Display/headlines:** Geist weight 600-700 + `tracking-tight`
- **Acentos editoriales:** Instrument Serif italic (var `--font-serif`) — 1 palabra clave por headline
- **Mono:** Geist Mono (var `--font-mono`) — badges, métricas pequeñas

Escala mobile → desktop: H1 `text-4xl → text-7xl`, H2 `text-3xl → text-5xl`, body `text-base → text-lg`.

### Estilo general
- Mucho espacio en blanco, jerarquía clara
- Bordes redondeados (rounded-xl, rounded-2xl)
- Sombras sutiles
- Microinteracciones suaves (150-200ms)
- Mockups de celular reales mostrando tarjetas digitales

### Referencias visuales
Inspirarse en: linear.app, vercel.com, stripe.com, attio.com, cal.com

## Anti-patrones (NO hacer)

- ❌ Gradientes morado-azul genéricos tipo "AI default"
- ❌ Glassmorphism exagerado
- ❌ Stock photos de gente sonriendo con laptop
- ❌ Iconos genéricos sin curaduría
- ❌ Secciones tipo "Why choose us" con 6 features iguales en grid
- ❌ Testimonios inventados con avatares de Unsplash
- ❌ Headlines en inglés "translated"
- ❌ CTAs ambiguos ("Conoce más", "Descubre")

## Stack técnico

- Next.js 16 (App Router) — ⚠️ tiene breaking changes vs versiones anteriores
- TypeScript
- Tailwind CSS v4
- shadcn/ui (base-nova, neutral, CSS variables)
- Cult UI registry configurado en components.json
- motion (no framer-motion)
- Lucide para iconos

## Estructura de la landing (orden canónico)

1. **Nav** — logo, links (Cómo funciona, Precios, Casos), CTA "Empieza gratis"
2. **Hero** — headline + sub + 2 CTAs + mockup de celular con tarjeta
3. **Problema** — "¿Te pasa esto?" con 3-4 dolores reales
4. **Cómo funciona** — 3 pasos: crea, comparte QR, fideliza
5. **Tipos de tarjeta** — visual de los 6 tipos (sellos, puntos, cashback, VIP, cupones, gift cards)
6. **Herramientas poderosas** — push, geo, cumpleaños, reseñas, referidos
7. **Para quién es** — grid de tipos de negocio con iconos
8. **Resultados** — 2x retención, +30% gasto, números grandes
9. **Testimonios** — solo si son reales; omitir si no hay
10. **Precios** — claros, sin asteriscos
11. **FAQ** — objeciones reales del dueño de negocio
12. **CTA final** — "Crea tu primera tarjeta en 5 minutos"
13. **Footer**

## Reglas de código

- Componentes en `/components`, secciones en `/components/sections`
- Un archivo por sección (`Hero.tsx`, `Problem.tsx`, `HowItWorks.tsx`, etc.)
- Mobile-first — diseñar primero para 375px, escalar a desktop
- Verificar contraste WCAG AA mínimo en todo texto
- Imágenes con `next/image`, lazy load por default
- Sin `any` en TypeScript

## Componentes base

### Propios
| Componente | Ubicación | Uso |
|---|---|---|
| `LiquidGlass` | `components/ui/liquid-glass.tsx` | Superficie cristal Apple 2025. 3 intensidades. Requiere color detrás. |

### Cult UI instalados
| Componente | Estado |
|---|---|
| `cosmic-button` | Necesita repalettearse a coral (accent-500) cuando se use en CTAs |
| `gradient-heading`, `animated-number`, `logo-carousel`, `shift-card`, `hero-static-radial-gradient` | Disponibles |

### Cult UI a instalar en siguientes pasos
- `hero-liquid-metal` — palabra clave del hero
- `dynamic-island` — notificaciones sobre mockups
- `family-drawer` — menú mobile
- `text-animate` — títulos de Problema
- `three-d-carousel` — sección Tipos de tarjeta

## Skills activas (.claude/skills/)

- `components-build` — 16 reglas de accesibilidad, design tokens, polimorfismo, etc.
- `fixing-motion-performance` — auditor de animaciones (`/fixing-motion-performance`)
