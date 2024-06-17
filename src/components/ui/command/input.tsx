"use client";

import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { input } from "./styles";

export const CommandInput = forwardRef<
  ElementRef<typeof CommandPrimitive.Input>,
  ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="relative" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 text-primary shrink-0 opacity-50 absolute top-3 left-2" />
    <CommandPrimitive.Input ref={ref} className={input(className)} {...props} />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;
