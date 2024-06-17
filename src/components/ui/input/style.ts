import { tv } from "tailwind-variants";

export const InputStyles = tv({
  base: "flex h-10 w-full rounded-md bg-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border focus-visible:border-border focus-visible:bg-transparent disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    icon: {
      true: "pl-8",
    },
  },
});
