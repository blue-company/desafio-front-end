import { HTMLAttributes, forwardRef } from "react";
import { header } from "./styles";

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={header({ className })} {...props} />
));
TableHeader.displayName = "TableHeader";
