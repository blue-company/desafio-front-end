import { StaticImageData } from "next/image";

export interface DaySalesCardProps {
    icon: StaticImageData;
    color: string;
    number: number | string;
    title: string;
    description: string;
  }