import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-black px-4 py-5 text-base placeholder:text-white/50 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-500",
        className
      )}
      {...props} />
  );
}

export { Input }
