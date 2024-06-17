import { tv } from "tailwind-variants";

export const CommandStyles = tv({
  slots: {
    root: "flex h-full w-full flex-col overflow-hidden rounded-md bg-white text-slate-950",
    input:
      "flex h-10 w-full rounded-md bg-input py-3 pl-8 text-sm outline-none placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:border focus-visible:border-border focus-visible:bg-transparent",
    list: "max-h-[300px] overflow-y-auto overflow-x-hidden",
    group:
      "overflow-hidden p-1 text-slate-950  [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-slate-500",
    item: "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-slate-100 aria-selected:text-slate-900 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
  },
});

export const { root, input, list, group, item } = CommandStyles();
