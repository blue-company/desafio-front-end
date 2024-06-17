"use client";

import { forwardRef } from "react";
import { Content as ContentPrimitive } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuPortal } from "./portal";
import { content } from "./styles";

export const DropdownMenuContent = forwardRef<
  React.ElementRef<typeof ContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContentPrimitive>
>(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <DropdownMenuPortal>
      <ContentPrimitive
        ref={ref}
        sideOffset={sideOffset}
        className={content({ className })}
        {...props}
      />
    </DropdownMenuPortal>
  );
});
DropdownMenuContent.displayName = ContentPrimitive.displayName;
