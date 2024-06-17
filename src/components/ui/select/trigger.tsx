"use client";

import { forwardRef } from "react";
import {
  Trigger as TriggerPrimitive,
  Icon as IconPrimitive,
} from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";
import { trigger, icon } from "./styles";

export const SelectTrigger = forwardRef<
  React.ElementRef<typeof TriggerPrimitive>,
  React.ComponentPropsWithoutRef<typeof TriggerPrimitive>
>(({ className, children, ...props }, ref) => (
  <TriggerPrimitive ref={ref} className={trigger({ className })} {...props}>
    {children}
    <IconPrimitive asChild>
      <ChevronDown className={icon({ className: "opacity-50" })} />
    </IconPrimitive>
  </TriggerPrimitive>
));
SelectTrigger.displayName = TriggerPrimitive.displayName;
