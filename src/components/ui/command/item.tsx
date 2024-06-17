"use client";

import { Command as CommandPrimitive } from "cmdk";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { item } from "./styles";

export const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitive.Item>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item ref={ref} className={item(className)} {...props} />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;
