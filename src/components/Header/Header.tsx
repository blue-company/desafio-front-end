import { Bell, Search } from "lucide-react";
import { Input } from "../ui/input";
import { DropdownMenu } from "../ui/dropdown-menu";
import { ChangeLanguage } from "./ChangeLanguage";
import { Profile } from "./Profile";

export function Header() {
    return (
        <header className="flex flex-col md:flex-row md:justify-between items-center lg:gap-5">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <Input type="search " icon={<Search />} placeholder="Pesquisar Informações" className="w-full md:w-[40%] bg-[3F9FAFB]" />
            <div className="hidden lg:flex items-center gap-4 justify-around" >
                <ChangeLanguage />
                <Bell className="w-5 h-5"/>
                <Profile/>
            </div>
        </header>
    )
}