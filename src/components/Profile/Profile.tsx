import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import profile from "/public/profile.png";
import { ChevronDown } from "lucide-react";

export function Profile() {
  return (
    <div className="flex items-center gap-1 lg:flex-row ">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-2">
          <Image
            src={profile}
            alt="Profile icon"
            className="w-10 md:h-10 rounded-lg"
          />
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center">
              <h3 className="text-start font-bold text-sm lg:text-xs xl:text-sm">
                Paulo Freire
              </h3>
              <ChevronDown className="w-5 lg:w-4 xl:w-5" />
            </div>
            <p className="text-start text-xs">Comercial</p>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Editar Informações</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
