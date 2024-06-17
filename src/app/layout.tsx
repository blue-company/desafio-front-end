import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "~/components/header";
import { AsideNavigation } from "~/components/aside-navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Teste front-end blue",
  description: "Teste de front-end para a empresa blue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <div className="hidden lg:block lg:w-72">
            <AsideNavigation className="w-72 fixed" />
          </div>
          <div className="flex-1">
            <Header />
            <main className="p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
