import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Bell } from "lucide-react";

interface NotificationProps {
    name?: string;
}

export function Notification({name}: NotificationProps) {
  return (
      <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 text-yellow-400 font-bold bg-[#FFFAF1] hover:bg-[#f9f2e4] p-2 rounded-md items-center">
            <Bell className="w-5 lg:w-4 xl:w-5 text-yellow-400" />
            {name}
          </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Suas Notificações</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Notificação 1</DropdownMenuItem>
          <DropdownMenuItem>Notificação 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}
