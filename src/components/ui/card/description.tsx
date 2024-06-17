import { forwardRef } from "react";
import { description } from "./styles";

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={description({ className })} {...props} />
));
CardDescription.displayName = "CardDescription";
