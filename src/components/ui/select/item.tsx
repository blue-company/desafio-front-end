"use client";

import { forwardRef } from "react";
import {
  Item as ItemPrimitive,
  ItemIndicator as ItemIndicatorPrimitive,
  ItemText as ItemTextPrimitive,
} from "@radix-ui/react-select";
import { Check } from "lucide-react";
import { itemIndicator, item, icon } from "./styles";

export const SelectItem = forwardRef<
  React.ElementRef<typeof ItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof ItemPrimitive>
>(({ className, children, ...props }, ref) => (
  <ItemPrimitive ref={ref} className={item({ className })} {...props}>
    <span className={itemIndicator()}>
      <ItemIndicatorPrimitive>
        <Check className={icon()} />
      </ItemIndicatorPrimitive>
    </span>

    <ItemTextPrimitive>{children}</ItemTextPrimitive>
  </ItemPrimitive>
));
SelectItem.displayName = ItemPrimitive.displayName;
