"use client";

import { Command as CommandPrimitive } from "cmdk";
import { root } from "./styles";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Command = forwardRef<
  ElementRef<typeof CommandPrimitive>,
  ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive ref={ref} className={root({ className })} {...props} />
));
Command.displayName = CommandPrimitive.displayName;
