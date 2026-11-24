import * as React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? "span" : "button"

    const variants = {
      // Primary button strictly uses RGB(16, 112, 177)
      default: "bg-[#1070B1] text-white shadow-sm hover:bg-[#0D5B91] active:bg-[#0B4F7E]",
      dark: "bg-black text-white shadow-sm hover:bg-neutral-800 active:bg-neutral-900",
      secondary: "bg-slate-100 text-black hover:bg-slate-200 active:bg-slate-300 border border-slate-300",
      outline: "border-2 border-[#1070B1] bg-white text-[#1070B1] shadow-sm hover:bg-[#1070B1] hover:text-white",
      outlineBlack: "border-2 border-black bg-white text-black shadow-sm hover:bg-black hover:text-white",
      ghost: "text-black hover:bg-slate-100",
      link: "text-[#1070B1] underline-offset-4 hover:underline",
    }

    const sizes = {
      default: "h-10 px-5 py-2 text-xs font-bold uppercase tracking-wider",
      sm: "h-8 rounded px-3 text-[11px] font-bold uppercase tracking-wider",
      lg: "h-11 rounded-md px-6 text-sm font-bold uppercase tracking-wider",
      icon: "h-9 w-9",
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-bold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1070B1] disabled:pointer-events-none disabled:opacity-50 select-none",
          variants[variant] || variants.default,
          sizes[size] || sizes.default,
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
