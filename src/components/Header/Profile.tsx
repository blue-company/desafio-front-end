import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "../ui/dropdown-menu";
import profile from "/public/profile.png"
import logoBlue from "../assets/logoBlue.svg"
import { Bell, ChevronDown } from "lucide-react";

export function Profile() {
  return (
    <div className="flex items-center gap-1 lg:flex-row ">
      <DropdownMenu>
      <Image src={profile} alt="Profile icon" className="w-16 h-16 rounded-lg"/>
      <div className="flex flex-col justify-center">
            <DropdownMenuTrigger  className="flex itmens-start">
                <h3 className="text-start font-bold">Paulo Freire</h3>
                <ChevronDown/>
            </DropdownMenuTrigger>
            <p className="text-start">Comercial</p>
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