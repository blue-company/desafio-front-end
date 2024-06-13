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
        <Card className="w-48 rounded-2xl" style={cardStyle}>
            <CardHeader className="pb-2 flex flex-col gap-2">
                <Image src={icon} alt={title} className="w-10 h-10"/>
                <CardTitle>{number}</CardTitle>
                <CardDescription>{title}</CardDescription>
            </CardHeader>
            <CardContent>{description}</CardContent>
        </Card>
    );
}
