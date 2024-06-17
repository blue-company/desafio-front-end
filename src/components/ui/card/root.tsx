import { forwardRef } from "react";
import { root } from "./styles";

export const Card = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={root({ className })} {...props} />
));
Card.displayName = "Card";
