"use client";

import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";

interface SidebarLinkButtonIconProps {
  href: string;
  image: StaticImageData;
  text?: string;
  alt: string;
}

export function SidebarLinkButtonIcon({
  href,
  image,
  text,
  alt,
}: SidebarLinkButtonIconProps) {
  const pathname = usePathname();


  function linkClass(hrefLink: string) {
    return pathname.startsWith(hrefLink)
      ? "flex items-center gap-3 p-4 text-white font-bold bg-primary-foreground rounded-md "
      : "flex items-center gap-3 p-4  ";
  }

  return (
    <a href={href} className={linkClass(href)}>
      <Image src={image} className="w-5" alt={alt} />
      {text}
    </a>
  );
}
