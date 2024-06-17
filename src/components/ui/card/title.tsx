import { forwardRef } from "react";
import { title } from "./styles";

export const CardTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={title({ className })} {...props} />
));
CardTitle.displayName = "CardTitle";
