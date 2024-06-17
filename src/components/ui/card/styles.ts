import { tv } from "tailwind-variants";

const CardStyles = tv({
  slots: {
    root: "rounded-lg bg-card text-card-foreground space-y-4",
    header: "flex flex-col space-y-1.5 p-4",
    title: "text-lg font-semibold leading-none tracking-tight text-foreground",
    description: "text-sm text-muted-foreground",
    content: "p-4 pt-0",
    footer: "p-6 pt-0",
  },
});

export const { root, header, title, description, content, footer } =
  CardStyles();
