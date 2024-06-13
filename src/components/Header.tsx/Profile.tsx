import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu";

import logoBlue from "../assets/logoBlue.svg"
import { Bell, ChevronDown } from "lucide-react";

export function Profile() {
  return (
    <div className="flex items-center gap-6">
      <Bell className="w-5 h-5"/>
      <DropdownMenu>
      <Image src={logoBlue} alt="Profile icon" className="w-16 h-16 rounded-lg"/>
      <div className="flex flex-col justify-center">
            <DropdownMenuTrigger  className="flex">
                    <h3 className="font-bold">Paulo Freire</h3>
                    <ChevronDown/>
            </DropdownMenuTrigger>
            <p>Comercial</p>
      </div>
        <DropdownMenuContent>
            <DropdownMenuItem>Editar Informações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Sair</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

      
    </div>
  );
}