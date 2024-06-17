import { forwardRef } from "react";
import { header } from "./styles";

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={header({ className })} {...props} />
));
CardHeader.displayName = "CardHeader";
