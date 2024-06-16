import { StaticImageData } from "next/image";

export   interface TopSellersProps {
    position: number;
    img: StaticImageData;
    name: string;
    total: number;
  }