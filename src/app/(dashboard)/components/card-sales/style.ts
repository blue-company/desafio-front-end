import { tv } from "tailwind-variants";

export const CardSalesStyles = tv({
  slots: {
    content: "grid grid-cols-4 gap-2",
    item: "p-4 rounded-md col-span-4 sm:col-span-2 2xl:col-span-1",
    title: "text-lg font-bold my-2",
    subTitle: "text-muted-foreground mb-2",
    paragraph: "text-xs text text-[#5283EC]",
  },
  variants: {
    type: {
      newContract: {
        item: "bg-[#F3E8FF]",
      },
      totalContract: {
        item: "bg-[#FFF4DE]",
      },
      totalDeploy: {
        item: "bg-[#DCFCE7]",
      },
      totalSales: {
        item: "bg-[#FFE2E5]",
      },
    },
  },
});

export const { content, item, paragraph, subTitle, title } = CardSalesStyles();
