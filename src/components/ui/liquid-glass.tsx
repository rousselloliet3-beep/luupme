import * as React from "react"

import { cn } from "@/lib/utils"

type Intensity = "light" | "medium" | "heavy"

const intensities: Record<Intensity, string> = {
  light:
    "bg-white/20 backdrop-blur-xl backdrop-saturate-150 dark:bg-white/5",
  medium:
    "bg-white/30 backdrop-blur-2xl backdrop-saturate-150 dark:bg-white/10",
  heavy:
    "bg-white/40 backdrop-blur-3xl backdrop-saturate-200 dark:bg-white/15",
}

export interface LiquidGlassProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Intensidad del cristal. @default "medium" */
  intensity?: Intensity
}

/**
 * LiquidGlass — superficie de cristal estilo Apple 2025.
 *
 * REQUIERE color detrás (blob/mesh/aurora). Sobre blanco plano se ve mal.
 *
 * @example
 * <div className="relative bg-gradient-to-br from-brand-200 to-accent-200 p-12">
 *   <LiquidGlass className="p-6">Contenido</LiquidGlass>
 * </div>
 */
export const LiquidGlass = React.forwardRef<HTMLDivElement, LiquidGlassProps>(
  ({ className, intensity = "medium", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="liquid-glass"
        data-intensity={intensity}
        className={cn(
          intensities[intensity],
          "border border-white/40 dark:border-white/15",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]",
          "shadow-2xl shadow-ink-900/10 dark:shadow-black/40",
          "rounded-3xl",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
LiquidGlass.displayName = "LiquidGlass"
