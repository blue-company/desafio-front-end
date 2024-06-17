import { forwardRef } from "react";
import { content } from "./styles";

export const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={content({ className })} {...props} />
));
CardContent.displayName = "CardContent";
