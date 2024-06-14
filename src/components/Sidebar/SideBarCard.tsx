import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import logoBlueWhite from "../assets/logoBlueWhite.svg";  
import { Button } from "../ui/button";
import Image from "next/image";
import bg from "../assets/CardBg.svg"

export function SideBarCard() {
    return(
        <Card className="text-white md:mt-auto bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg.src})` }}>
          <CardHeader >
            <CardTitle className="text-center flex flex-col items-center gap-2 text-base md:text-2xl">
              <Image src={logoBlueWhite} width={500} height={300} alt="Blue Company Icon" className="w-12" />
              Conheça a Blue
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Saiba mais informações sobre a Blue, uma operadora de saúde Health Tech</p>
          </CardContent>
          <CardFooter>
            <Button variant="default" className="w-full" asChild>
              <a href="https://www.saudeblue.com" target="_blank">
                Conhecer
              </a>
            </Button>
          </CardFooter>
        </Card>
    )
}