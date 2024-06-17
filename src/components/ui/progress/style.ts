import { tv } from "tailwind-variants";

export const ProgressStyle = tv({
  slots: {
    root: "relative h-2 w-full overflow-hidden rounded-full bg-input",
    indicator: "h-full w-full flex-1 bg-primary transition-all",
  },
  variants: {
    type: {
      first: {
        indicator: "bg-[#0095FF]",
      },
      second: {
        indicator: "bg-[#00E096]",
      },
      third: {
        indicator: "bg-[#884DFF]",
      },
      fourth: {
        indicator: "bg-[#FF8F0D]",
      },
    },
  },
});

export const { root, indicator } = ProgressStyle();
