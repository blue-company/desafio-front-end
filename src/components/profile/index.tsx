"use client";
import { ChevronDown, UserRound, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "../ui/dropdown";

export function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center cursor-pointer hover:bg-accent p-2 rounded">
          <div className="bg-slate-200 w-11 h-11 rounded-full flex justify-center items-center">
            <UserRound />
          </div>

          <div className="hidden md:block md:ml-2 md:mr-5">
            <p className="font-bold text-base ">John Doe</p>
            <p className="text-sm text-ring ">Comercial</p>
          </div>

          <div className="hidden md:block">
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="flex-col items-start gap-1">
          <p>John Doe</p>
          <p className="font-bold">johndoe@gmail.com</p>
        </DropdownMenuItem>

        <hr className="my-1" />

        <DropdownMenuItem className="gap-2">
          <Bell className="h-4 w-4" />
          <p>Notificações</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
