import { forwardRef } from "react";
import { ScrollUpButton as ScrollUpButtonPrimitive } from "@radix-ui/react-select";
import { ChevronUp } from "lucide-react";
import { scrollUpButton, icon } from "./styles";

export const SelectScrollUpButton = forwardRef<
  React.ElementRef<typeof ScrollUpButtonPrimitive>,
  React.ComponentPropsWithoutRef<typeof ScrollUpButtonPrimitive>
>(({ className, ...props }, ref) => (
  <ScrollUpButtonPrimitive
    ref={ref}
    className={scrollUpButton({ className })}
    {...props}
  >
    <ChevronUp className={icon()} />
  </ScrollUpButtonPrimitive>
));
SelectScrollUpButton.displayName = ScrollUpButtonPrimitive.displayName;
