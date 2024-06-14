
import { Bell, Search } from "lucide-react";
import { Input } from "../ui/input";
import { ChangeLanguage } from "./ChangeLanguage";
import { Profile } from "./Profile";

export function Header() {
    return (
        <header className="bg-white px-8 md:p-8 flex flex-col md:flex-row md:justify-between items-center lg:gap-5">
            <h1 className="text-4xl font-bold mb-4 md:mb-0">Dashboard</h1>
            <Input type="search " icon={<Search className="text-[#5D5FEF]" />} placeholder="Pesquisar Informações" className="w-full border-none md:w-[40%] bg-[#F9FAFB]" />
            <div className="hidden lg:flex items-center gap-4 justify-around" >
                <ChangeLanguage />
                <Bell className="w-5 h-5"/>
                <Profile/>
            </div>
        </header>
    )
}