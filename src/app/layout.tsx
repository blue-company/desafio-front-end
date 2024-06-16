import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue | Administrativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ptbr">
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
