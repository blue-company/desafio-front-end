import { HTMLAttributes, forwardRef } from "react";
import { container, root } from "./styles";

export const Table = forwardRef<
  HTMLTableElement,
  HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className={container()}>
    <table ref={ref} className={root({ className })} {...props} />
  </div>
));
Table.displayName = "Table";
