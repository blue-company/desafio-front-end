import { Bell, ChevronDown, CircleUserRound, LogOut, Mails, UsersRound } from 'lucide-react';
import { BrazilFlag } from '../icon/flags';
import { Button } from '../ui/button';
import { Command, CommandInput } from '../ui/command';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface NavbarProps {
  currentRoute: string;
  languages: {
    id: number;
    name: string;
    value: string;
    flag: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>;
  }[];
}

export function Navbar({ currentRoute, languages }: NavbarProps) {
  function CustomPlaceholder() {
    return (
      <div className="flex gap-2 items-center text-gray-700 font-semibold">
        <BrazilFlag className="size-4 rounded-full" />
        <span>PT (BR)</span>
      </div>
    );
  }

  return (
    <nav className="bg-white flex justify-between w-full py-6 px-10">
      <h2 className="text-[#151D48] text-3xl font-bold">{currentRoute}</h2>
      <div className="flex gap-8">
        <Command className="bg-gray-100 w-96">
          <CommandInput className="placeholder:font-medium" placeholder="Pesquisar informações" />
        </Command>
        <Select>
          <SelectTrigger className="border-0 w-[180px] h-full">
            <SelectValue placeholder={<CustomPlaceholder />} />
          </SelectTrigger>
          <SelectContent>
            {languages.map((item) => (
              <SelectItem key={item.id} value={item.value}>
                <div className="flex gap-2 items-center text-gray-700 font-semibold">
                  <item.flag className="size-4 rounded-full" />
                  <span>{item.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="bg-[#FFFAF1]">
              <Bell size={18} color="#FFA412" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex gap-3 hover:bg-black/10 cursor-pointer duration-500 rounded-xl items-center">
              <div className="bg-slate-700 px-4 py-2 rounded-xl text-white">H</div>
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <h3 className="text-[#151D48] font-bold ">Henrique Braga</h3>
                  <ChevronDown />
                </div>
                <span className="text-sm font-light text-gray-400">Admin</span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <CircleUserRound size={16} className="mr-2" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Mails size={16} className="mr-2" />
              Messages
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UsersRound size={16} className="mr-2" />
              Team
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut color="red" size={16} className="mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
