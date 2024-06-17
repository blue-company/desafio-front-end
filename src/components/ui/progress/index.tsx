"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { ProgressStyle, indicator, root } from "./style";
import { VariantProps } from "tailwind-variants";

export interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
    VariantProps<typeof ProgressStyle> {}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, type, value, ...props }, ref) => (
  <ProgressPrimitive.Root ref={ref} className={root({ className })} {...props}>
    <ProgressPrimitive.Indicator
      className={indicator({ type })}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
