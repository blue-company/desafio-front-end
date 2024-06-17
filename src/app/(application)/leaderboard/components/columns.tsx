import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { DataType } from './dataTable';
import { MoreActions } from './moreActions';

export const columns: ColumnDef<DataType>[] = [
  {
    accessorKey: 'name',
    header: 'Nome do vendedor'
  },
  {
    accessorKey: 'sector',
    header: 'Setor'
  },
  {
    accessorKey: 'sales',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Quantidade de vendas
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Valor gerado
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Última venda
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return <MoreActions />;
    }
  }
];
