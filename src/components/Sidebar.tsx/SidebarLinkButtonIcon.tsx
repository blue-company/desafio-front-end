"use client";

import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";

interface SidebarLinkButtonIconProps {
  href: string;
  image: StaticImageData;
  icon?: boolean;
  text?: string;
  alt: string;
}

export function SidebarLinkButtonIcon({
  href,
  image,
  icon = false,
  text,
  alt,
}: SidebarLinkButtonIconProps) {
  const pathname = usePathname();


  function linkClass(hrefLink: string) {
    return pathname.startsWith(hrefLink)
      ? "p-1 w-8 h-8 hover:text-stone-700 hover:bg-stone-200 hover:rounded bg-brown-100 rounded"
      : "p-1 w-8 h-8 hover:text-stone-700 hover:bg-stone-200 hover:rounded";
  }

  const noIconClassName =
    "flex items-center gap-2 text-base cursor-pointer ";

  return (
    <a href={href} className={icon ? "" : noIconClassName}>
      <Image src={image} width={500} height={300} alt={alt} className={linkClass(href)} />
      {text}
    </a>
  );
}
