import { forwardRef } from "react";
import { ScrollDownButton as ScrollDownButtonPrimitive } from "@radix-ui/react-select";
import { scrollDownButton, icon } from "./styles";
import { ChevronDown } from "lucide-react";

export const SelectScrollDownButton = forwardRef<
  React.ElementRef<typeof ScrollDownButtonPrimitive>,
  React.ComponentPropsWithoutRef<typeof ScrollDownButtonPrimitive>
>(({ className, ...props }, ref) => (
  <ScrollDownButtonPrimitive
    ref={ref}
    className={scrollDownButton({ className })}
    {...props}
  >
    <ChevronDown className={icon()} />
  </ScrollDownButtonPrimitive>
));
SelectScrollDownButton.displayName = ScrollDownButtonPrimitive.displayName;
