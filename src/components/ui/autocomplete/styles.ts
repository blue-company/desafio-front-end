import { tv } from "tailwind-variants";

export const AutocompleteStyles = tv({
  slots: {
    root: "animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded-xl bg-white outline-none",
    list: "rounded-lg ring-1 ring-slate-200",
    item: "flex w-full items-center gap-2",
    empty: "select-none rounded-sm px-2 py-3 text-center text-sm",
  },
  variants: {
    isOpen: {
      true: { root: "block" },
      false: { root: "hidden" },
    },
    isSelected: {
      true: {
        item: "pl-8",
      },
    },
  },
});

export const { root, item, list, empty } = AutocompleteStyles();
