import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { About } from "../ui/icon";

export function CardBanner() {
  return (
    <Card className="bg-primary">
      <CardHeader>
        <About className="m-auto mb-4" />
        <CardTitle className="text-center text-primary-foreground">
          Conheça a Blue
        </CardTitle>
        <CardDescription className="text-center text-primary-foreground text-xs">
          Saiba mais informações sobre a Blue, uma operadora de saúde Health
          Tech.
        </CardDescription>
      </CardHeader>
      <CardFooter className="text-center">
        <Button variant="secondary">Conheçer</Button>
      </CardFooter>
    </Card>
  );
}
