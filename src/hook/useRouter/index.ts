import { usePathname } from "next/navigation";
import { useRouter as useRouterNext } from "next/navigation";

export function useRouter() {
  const pathname = usePathname();
  const { push } = useRouterNext();

  function handleChangePage(page: string) {
    push(page);
  }

  function isActive(path: string): boolean {
    return path === pathname;
  }

  return {
    handleChangePage,
    isActive,
  };
}
