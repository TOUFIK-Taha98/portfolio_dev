import * as React from "react"
import { cn } from "@/lib/utils"

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      role="none"
      className={cn("w-full h-px bg-border dark:bg-white/10", className)}
      {...props}
    />
  )
}
