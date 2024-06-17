import { forwardRef } from "react";
import { footer } from "./styles";

export const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={footer({ className })} {...props} />
));
CardFooter.displayName = "CardFooter";
