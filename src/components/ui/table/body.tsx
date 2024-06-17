import { HTMLAttributes, forwardRef } from "react";
import { body } from "./styles";

export const TableBody = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={body({ className })} {...props} />
));
TableBody.displayName = "TableBody";
