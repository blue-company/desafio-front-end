import { tv } from "tailwind-variants";

const MenuStyles = tv({
  slots: {
    root: "space-y-2",
    link: "flex p-4 rounded-md items-center gap-2 bg-background hover:bg-primary/20 text-ring",
    icon: "h-5 w-5 text-ring",
  },
  variants: {
    active: {
      true: {
        link: "bg-primary text-primary-foreground hover:bg-primary",
        icon: "text-primary-foreground",
      },
    },
  },
});

export const { icon, link, root } = MenuStyles();
