import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import profile from "/public/profile.png";
import { ChevronDown, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export function Profile() {
  const router = useRouter();

  async function handleLogout() {
    await signOut({
      redirect: false,
    });
    router.replace("/");
  }
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
          <DropdownMenuItem className="cursor-pointer">
            Editar Informações
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
            <LogOut className="text-[#5D5FEF] mr-2 w-4" /> Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
