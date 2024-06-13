import { Bell, Search } from "lucide-react";
import { Input } from "../ui/input";
import { DropdownMenu } from "../ui/dropdown-menu";
import { ChangeLanguage } from "./ChangeLanguage";
import { Profile } from "./Profile";

export function Header() {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <Input type="search " icon={<Search />} placeholder="Pesquisar Informações" className="w-[40%] bg-[3F9FAFB]" />
            <ChangeLanguage/>
            
            <Profile/>
        </header>
    )
}