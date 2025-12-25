'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

// Lightweight tooltip without external deps (shadcn-like API)
export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  return <div className="relative inline-block group">{children}</div>
}

export function TooltipTrigger({ children }: { children: React.ReactNode }) {
  return <div className="inline-flex items-center">{children}</div>
}

export function TooltipContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 z-50 rounded-md bg-black/90 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
        className
      )}
    >
      <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-black/90" />
      {children}
    </div>
  )
}
