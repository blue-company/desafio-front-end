import { tv } from "tailwind-variants";

export const ButtonStyles = tv({
  base: "rounded-md",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90 ",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
