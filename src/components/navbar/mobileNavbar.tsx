import { EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons';
import {
  Bell,
  CalendarIcon,
  CircleUserRound,
  Languages,
  LogOut,
  Mails,
  RocketIcon,
  Search,
  UsersRound
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
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
  DropdownMenuTrigger
} from '../ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet';

interface MobileNavbarProps {
  languages: {
    id: number;
    name: string;
    value: string;
    flag: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>;
  }[];
}

export function MobileNavbar({ languages }: MobileNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-3 sm:gap-8 lg:hidden">
      <Button onClick={() => setOpen((open) => !open)} size="icon" variant="ghost">
        <Search className="size-5 xs:size-6" color="#5D5FEF" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost">
            <Languages className="size-5 xs:size-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {languages.map((item) => (
            <DropdownMenuItem key={item.id}>
              <div className="flex gap-2 items-center text-gray-700 font-semibold">
                <item.flag className="size-4 rounded-full" />
                <span>{item.name}</span>
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/profile.jpeg"
            alt="Foto de Henrique Braga"
            className="rounded-lg"
            width={40}
            height={40}
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col h-full">
          <SheetHeader className="flex-row space-y-0">
            <div className="flex gap-2 w-full items-center">
              <Image
                src="/profile.jpeg"
                alt="Foto de Henrique Braga"
                className="rounded-lg"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <SheetTitle className="text-sm text-start">Henrique Braga</SheetTitle>
                <span className="text-xs xl:text-sm font-light text-gray-400 text-start">
                  Admin
                </span>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="bg-[#FFFAF1] p-2 rounded-md mr-4">
                  <Bell size={18} color="#FFA412" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <span className="px-2">Sem notificações por agora...</span>
              </DropdownMenuContent>
            </DropdownMenu>
          </SheetHeader>
          <div className="h-1 border-b border-gray-500 mb-4" />
          <div className="flex flex-col gap-4 text-white flex-grow">
            <div className="flex gap-2 bg-[#2500FF] items-center px-4 py-2 rounded-lg">
              <CircleUserRound size={16} className="mr-2" />
              <span>Profile</span>
            </div>
            <div className="flex gap-2 bg-[#2500FF] items-center px-4 py-2 rounded-lg">
              <Mails size={16} className="mr-2" />
              <span>Messages</span>
            </div>
            <div className="flex gap-2 bg-[#2500FF] items-center px-4 py-2 rounded-lg">
              <UsersRound size={16} className="mr-2" />
              <span>Team</span>
            </div>
          </div>
          <SheetFooter className="mt-auto">
            <Button variant="outline">
              <LogOut color="red" size={16} className="mr-2" />
              Logout
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
