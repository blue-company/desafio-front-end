import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import logoBlueWhite from "../assets/logoBlueWhite.svg";  
import { Button } from "../ui/button";
import Image from "next/image";

export function SideBarCard() {
    return(
        <Card className="text-white">
          <CardHeader >
            <CardTitle className=" text-center flex flex-col items-center gap-2">
              <Image src={logoBlueWhite} width={500} height={300} alt="Blue Company Icon" className="w-12" />
              Conheça a Blue
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Saiba mais informações sobre a Blue, uma operadora de saúde Health Tech</p>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full">Conhecer</Button>
          </CardFooter>
        </Card>
    )
}