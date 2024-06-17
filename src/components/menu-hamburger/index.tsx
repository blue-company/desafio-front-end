"use client";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { AsideNavigation } from "../aside-navigation";
import { useMatchQuery } from "~/hook/useMatchQuery";

export function MenuHamburguer() {
  useMatchQuery("(min-width: 1024px)");

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="inline-block lg:hidden" />
      </SheetTrigger>
      <SheetContent className="w-full min-[400px]:w-[360px]" side="left">
        <AsideNavigation isSheet={true} />
      </SheetContent>
    </Sheet>
  );
}
