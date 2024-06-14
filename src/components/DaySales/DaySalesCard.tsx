import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface DaySalesCardProps {
  icon: StaticImageData;
  color: string;
  number: number;
  title: string;
  description: string;
}
export function DaySalesCard({
    icon,
    color,
    number,
    title,
    description,
}: DaySalesCardProps) {
    
    const cardStyle = {
        backgroundColor: color,
    };

    return (
        <Card className="max-w-[140px] w-full rounded-2xl" style={cardStyle}>
            <CardHeader className=" flex flex-col pt-4 px-4 pb-1">
                <Image src={icon} alt={title} className="w-10 h-10"/>
                <CardTitle className="text-[15px]">{number}</CardTitle>
                <CardDescription className="text-[13px] text-[#425166]">{title}</CardDescription>
            </CardHeader>
            <CardContent className="text-blue-700 text-[12px] p-0 pb-4 px-4" >{description}</CardContent>
        </Card>
    );
}
