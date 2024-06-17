"use client";

import Link from "next/link";
import { useRouter } from "~/hook/useRouter";
import { root, link, icon } from "./styles";
import { handleCloseComponents } from "~/utils/close-components";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useFilterOptionsMenu } from "~/hook/useFilterOptionsMenu";

type MenuProps = {
  isSheet?: boolean;
};

export function Menu({ isSheet }: MenuProps) {
  const { isActive } = useRouter();
  const { handleFilterOptionsMenu, optionsMenu } = useFilterOptionsMenu();

  return (
    <div>
      <div className="relative lg:hidden">
        <Search className="absolute text-primary w-4 top-2 left-2" />
        <Input
          icon={true}
          placeholder="Pesquisar informações"
          className="mb-4 "
          autoFocus={false}
          onChange={(e) => {
            handleFilterOptionsMenu(e.target.value);
          }}
        />
      </div>
      <nav className={root()}>
        {optionsMenu.map((itemRoute) => {
          const { icon: iconElement, label, path } = itemRoute;
          return (
            <Link
              key={path}
              href={path}
              className={link({ active: isActive(path) })}
              onClick={isSheet ? handleCloseComponents : () => {}}
            >
              {iconElement(icon({ active: isActive(path) }))}
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
