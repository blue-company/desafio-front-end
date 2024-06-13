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
    console.log(pathname.startsWith(hrefLink));
    return pathname.startsWith(hrefLink)
      ? "flex p-1 bg-red-700 rounded-md "
      : "flex p-1 ";
  }

  return (
    <a href={href} className={linkClass(href)}>
      <Image src={image} width={500} height={300} alt={alt} />
      {text}
    </a>
  );
}
