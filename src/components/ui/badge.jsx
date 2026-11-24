import * as React from "react"
import { cn } from "../../lib/utils"

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-slate-300 bg-slate-100 text-black font-bold",
    blue: "border-[#1070B1]/30 bg-[#E8F3FA] text-[#1070B1] font-bold",
    secondary: "border-slate-200 bg-slate-100 text-black font-bold",
    outline: "border-slate-300 bg-white text-black font-bold",
    success: "border-emerald-300 bg-emerald-50 text-emerald-800 font-bold",
    destructive: "border-red-300 bg-red-50 text-red-800 font-bold",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px]  font-bold transition-colors",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    />
  )
}

export { Badge }
