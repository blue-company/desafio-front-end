import { tv } from "tailwind-variants";

export const AsideNavigationStyles = tv({
  slots: {
    root: "  h-screen flex flex-col justify-between bg-background overflow-y-auto min-[400px]:py-4 min-[400px]:px-4 lg:py-6 lg:px-8 gap-4",
    titleRoot: "flex items-center gap-4 mb-6",
    title: "text-xl font-bold",
  },
});

export const { root, title, titleRoot } = AsideNavigationStyles();
