import { CardLife } from "./components/card-life";
import { CardMappingSales } from "./components/card-mapping-sales";
import { CardPeformance } from "./components/card-performance";
import { CardPlatform } from "./components/card-platform";
import { CardProduct } from "./components/card-product";
import { CardReal } from "./components/card-real";
import { CardSales } from "./components/card-sales";
import { CardServiceLevel } from "./components/card-service-level";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      <CardSales className="col-span-1 md:col-span-2" />
      <CardPlatform className="col-span-1 md:col-span-2" />
      <CardPeformance className="col-span-1 md:col-span-4 2xl:col-span-2" />
      <CardLife className="col-span-1 md:col-span-2 2xl:col-span-1" />
      <CardReal className="col-span-1 md:col-span-2 2xl:col-span-1" />
      <CardProduct className="col-span-1 md:col-span-4 2xl:col-span-2" />
      <CardMappingSales className="col-span-1 md:col-span-2 2xl:col-span-1" />
      <CardServiceLevel className="col-span-1 md:col-span-2 2xl:col-span-1" />
    </div>
  );
}
