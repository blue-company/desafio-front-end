import { tv } from "tailwind-variants";

export const TableStyles = tv({
  slots: {
    root: "w-full caption-bottom text-sm",
    container: "relative w-full overflow-auto",
    header: "[&_tr]:border-b",
    body: "[&_tr:last-child]:border-0",
    row: "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
    head: "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
    cell: "p-4 align-middle [&:has([role=checkbox])]:pr-0",
  },
});

export const { root, container, header, body, row, head, cell } = TableStyles();
