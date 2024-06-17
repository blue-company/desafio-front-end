"use client";

import {
  Portal as PortalPrimitive,
  Close as ClosePrimitive,
  Content as ContentPrimitive,
} from "@radix-ui/react-dialog";
import { SheetOverlay } from "./overlay";
import { X } from "lucide-react";
import { SheetStyles, content, close, icon } from "./style";
import { VariantProps } from "tailwind-variants";
import { forwardRef } from "react";

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof ContentPrimitive>,
    VariantProps<typeof SheetStyles> {}

export const SheetContent = forwardRef<
  React.ElementRef<typeof ContentPrimitive>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => {
  return (
    <PortalPrimitive>
      <SheetOverlay />
      <ContentPrimitive
        ref={ref}
        className={content({ className, side })}
        {...props}
      >
        {children}
        <ClosePrimitive className={close()}>
          <X className={icon()} />
          <span className="sr-only">Close</span>
        </ClosePrimitive>
      </ContentPrimitive>
    </PortalPrimitive>
  );
});
SheetContent.displayName = ContentPrimitive.displayName;
