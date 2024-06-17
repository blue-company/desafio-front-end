import { TdHTMLAttributes, forwardRef } from "react";
import { cell } from "./styles";

export const TableCell = forwardRef<
  HTMLTableCellElement,
  TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td ref={ref} className={cell({ className })} {...props} />
));
TableCell.displayName = "TableCell";
