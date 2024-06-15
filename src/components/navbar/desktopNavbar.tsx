import { EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons';
import {
  Bell,
  CalendarIcon,
  ChevronDown,
  CircleUserRound,
  LogOut,
  Mails,
  RocketIcon,
  UsersRound
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { BrazilFlag } from '../icon/flags';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../ui/alert-dialog';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '../ui/command';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface DesktopNavbarProps {
  languages: {
    id: number;
    name: string;
    value: string;
    flag: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>;
  }[];
  logout: () => void;
}

export function DesktopNavbar({ languages, logout }: DesktopNavbarProps) {
  const [open, setOpen] = useState(false);

  function CustomSelectPlaceholder() {
    return (
      <div className="flex gap-2 items-center text-gray-700 font-semibold">
        <BrazilFlag className="size-4 rounded-full" />
        <span>PT (BR)</span>
      </div>
    );
  }

  return (
    <div className="lg:flex flex-1 gap-6 xl:gap-8 items-center hidden">
      <Command className="bg-gray-100 max-w-[62%]">
        <CommandInput
          onClick={() => setOpen((open) => !open)}
          className="placeholder:font-medium"
          placeholder="Pesquisar informações"
        />
      </Command>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendário</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Pesquisar Emojis</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Lançamentos</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Perfil</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Email</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Configurações</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <Select>
        <SelectTrigger className="border-0 w-[180px] h-full">
          <SelectValue placeholder={<CustomSelectPlaceholder />} />
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
          <button className="bg-[#FFFAF1] p-2 rounded-md">
            <Bell size={18} color="#FFA412" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <span className="px-2">Sem notificações por agora...</span>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex gap-2 xl:gap-3 hover:bg-black/10 cursor-pointer duration-500 rounded-xl items-center">
            <Image
              src="/profile.jpeg"
              alt="Foto de Henrique Braga"
              className="rounded-lg"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <div className="flex gap-1 items-center">
                <h3 className="text-[#151D48] text-sm xl:text-base font-bold text-nowrap">
                  Henrique Braga
                </h3>
                <ChevronDown className="size-4 xl:size-6" />
              </div>
              <span className="text-xs xl:text-sm font-light text-gray-400">Admin</span>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <CircleUserRound size={16} className="mr-2" />
            Perfil
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mails size={16} className="mr-2" />
            Messagens
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UsersRound size={16} className="mr-2" />
            Times
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <AlertDialog>
            <AlertDialogTrigger onSelect={(e) => e.preventDefault()} asChild>
              <DropdownMenuItem>
                <LogOut color="red" size={16} className="mr-2" />
                Sair
              </DropdownMenuItem>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Você realmente quer desconectar?</AlertDialogTitle>
                <AlertDialogDescription>
                  Ao confirmar, você sairá do sistema de dashboard da Blue Company e precisará fazer
                  login novamente.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-500 hover:bg-red-500/80"
                  onClick={() => logout()}
                >
                  Sair
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
