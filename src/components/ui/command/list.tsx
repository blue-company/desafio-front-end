"use client";

import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { list } from "./styles";

export const CommandList = forwardRef<
  ElementRef<typeof CommandPrimitive.List>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List ref={ref} className={list({ className })} {...props} />
));

CommandList.displayName = CommandPrimitive.List.displayName;
