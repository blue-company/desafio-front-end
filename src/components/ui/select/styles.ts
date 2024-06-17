import { tv } from "tailwind-variants";

export const SelectStyles = tv({
  slots: {
    trigger:
      "flex h-10 w-full items-center justify-between rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
    icon: "h-4 w-4",
    scrollUpButton: "flex cursor-default items-center justify-center py-1",
    scrollDownButton: "flex cursor-default items-center justify-center py-1",
    viewport:
      "p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
    content:
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
    item: "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    itemIndicator:
      "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
  },
});

export const {
  content,
  icon,
  scrollDownButton,
  scrollUpButton,
  trigger,
  viewport,
  item,
  itemIndicator,
} = SelectStyles();
