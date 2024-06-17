import { ThHTMLAttributes, forwardRef } from "react";
import { head } from "./styles";

export const TableHead = forwardRef<
  HTMLTableCellElement,
  ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th ref={ref} className={head({ className })} {...props} />
));
TableHead.displayName = "TableHead";
