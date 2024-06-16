import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import logoBlueWhite from "../assets/Logo/logoBlueWhite.svg";
import { Button } from "../ui/button";
import Image from "next/image";
import bg from "../assets/CardBg.svg";

export function SideBarCard() {
  return (
    <Card
      className="text-white mt-auto bg-no-repeat bg-cover p-0 bg-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <CardHeader className="p-0 px-3 pt-5">
        <CardTitle className="text-center flex flex-col items-center gap-2 text-base md:text-xl xl:text-2xl">
          <Image
            src={logoBlueWhite}
            width={500}
            height={300}
            alt="Blue Company Icon"
            className="w-12"
          />
          Conheça a Blue
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 px-3 pb-3 text-center text-xs xl:text-base">
        <p>
          Saiba mais informações sobre a Blue, uma operadora de saúde Health
          Tech
        </p>
      </CardContent>
      <CardFooter className="p-0 px-5 pb-5">
        <Button variant="default" className="w-full hover:opacity-85" asChild>
          <a href="https://www.saudeblue.com" target="_blank">
            Conhecer
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
