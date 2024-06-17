import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { BadgeInfo, Cog, MoreHorizontal, Trash2 } from 'lucide-react';

export function MoreActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger title="Mais ações">
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Mais Ações</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <BadgeInfo size={16} className="mr-1" /> Informações Gerais
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Cog size={16} className="mr-1" /> Atualizar Vendedor
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
          <Trash2 size={16} color="#ff0000" className="mr-1" /> Excluir Vendedor
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
