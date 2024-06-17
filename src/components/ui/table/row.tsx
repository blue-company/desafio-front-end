import { HTMLAttributes, forwardRef } from "react";
import { row } from "./styles";

export const TableRow = forwardRef<
  HTMLTableRowElement,
  HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr ref={ref} className={row({ className })} {...props} />
));
TableRow.displayName = "TableRow";
