import { tv } from "tailwind-variants";

export const SubtitleFooterStyles = tv({
  slots: {
    root: "",
    content: "flex items-center",
    title: "text-muted-foreground text-sm",
    amount: "text-xs text-center",
  },
  variants: {
    separate: {
      true: { root: "border-r border-r-boder pr-1 mr-1" },
    },
  },
});

export const { amount, content, root, title } = SubtitleFooterStyles();
