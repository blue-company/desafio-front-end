import { Overlay as OverlayPrimitive } from "@radix-ui/react-dialog";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { overlay } from "./style";

export const SheetOverlay = forwardRef<
  ElementRef<typeof OverlayPrimitive>,
  ComponentPropsWithoutRef<typeof OverlayPrimitive>
>(({ className, ...props }, ref) => (
  <OverlayPrimitive className={overlay({ className })} {...props} ref={ref} />
));
SheetOverlay.displayName = OverlayPrimitive.displayName;
