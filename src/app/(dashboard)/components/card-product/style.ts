import { tv } from "tailwind-variants";

export const CardProductStyles = tv({
  slots: {
    text: "text-center rounded-md border",
  },
  variants: {
    type: {
      first: {
        text: "border-[#0095FF] text-[#0095FF]",
      },
      second: {
        text: "border-[#00E096] text-[#00E096]",
      },
      third: {
        text: "border-[#884DFF] text-[#884DFF]",
      },
      fourth: {
        text: "border-[#FF8F0D] text-[#FF8F0D]",
      },
    },
  },
});

export const { text } = CardProductStyles();
