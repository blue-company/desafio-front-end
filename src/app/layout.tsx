import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sideMenu";
import NavBar from "@/components/navbar";
import BasicMenu from "@/components/mobileDropDown";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logoBlue.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <main className="flex font-Poppins">
          <SideBar />
          <div className="flex flex-col w-full bg-[#DDD] ">
            <NavBar />
            <BasicMenu />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
