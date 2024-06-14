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
        <Card className="max-w-48 rounded-2xl" style={cardStyle}>
            <CardHeader className="pb-1 flex flex-col">
                <Image src={icon} alt={title} className="w-10 h-10"/>
                <CardTitle>{number}</CardTitle>
                <CardDescription className="text-lg text-[#425166]">{title}</CardDescription>
            </CardHeader>
            <CardContent className="text-blue-700 text-sm pb-3 " >{description}</CardContent>
        </Card>
    );
}
