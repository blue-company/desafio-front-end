import { StaticImageData } from "next/image";

export interface DaySalesCardProps {
    icon: StaticImageData;
    color: string;
    number: number;
    title: string;
    description: string;
  }