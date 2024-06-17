"use client";

import {
  Content as ContentPrimitive,
  Portal as PortalPrimitive,
  Viewport as ViewportPrimitive,
} from "@radix-ui/react-select";
import { content, viewport } from "./styles";
import { SelectScrollDownButton } from "./scroll-down-button";
import { SelectScrollUpButton } from "./scroll-up-button";
import { forwardRef } from "react";

export const SelectContent = forwardRef<
  React.ElementRef<typeof ContentPrimitive>,
  React.ComponentPropsWithoutRef<typeof ContentPrimitive>
>(({ className, children, ...props }, ref) => (
  <PortalPrimitive>
    <ContentPrimitive
      ref={ref}
      className={content({ className })}
      position={"popper"}
      {...props}
    >
      <SelectScrollUpButton />
      <ViewportPrimitive className={viewport()}>{children}</ViewportPrimitive>
      <SelectScrollDownButton />
    </ContentPrimitive>
  </PortalPrimitive>
));
SelectContent.displayName = ContentPrimitive.displayName;
