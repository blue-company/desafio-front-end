"use client";
import { forwardRef } from "react";
import { Item as ItemPrimitive } from "@radix-ui/react-dropdown-menu";
import { item } from "./styles";

export const DropdownMenuItem = forwardRef<
  React.ElementRef<typeof ItemPrimitive>,
  React.ComponentPropsWithoutRef<typeof ItemPrimitive> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => {
  return (
    <ItemPrimitive
      ref={ref}
      className={item({ className, inset })}
      {...props}
    />
  );
});
DropdownMenuItem.displayName = ItemPrimitive.displayName;
