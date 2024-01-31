/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "src/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-6 w-full overflow-hidden rounded-md bg-primary/20",
      className
    )}
    {...props}
  >
             

    <ProgressPrimitive.Indicator
      className={cn("h-full w-full flex-1 shadow-inner transition-all", value as number > 45 ? "bg-green-400" : value as number < 30 ? " bg-red-500" : "bg-yellow-500")}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
     <span className="relative bottom-[-2px] right-10 text-sm font-light inline"> {value} </span>
   
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
