import { ColumnDef } from '@tanstack/react-table';
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
    header: 'Quantidade de vendas'
  },
  {
    accessorKey: 'amount',
    header: 'Valor gerado'
  },
  {
    accessorKey: 'date',
    header: 'Última venda'
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: () => {
      return <MoreActions />;
    }
  }
];
