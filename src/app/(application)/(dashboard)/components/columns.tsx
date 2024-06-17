import { Progress } from '@/components/ui/progress';
import { ColumnDef } from '@tanstack/react-table';

interface ColumnsType {
  id: number;
  productName: string;
  leverage: number;
  percent: number;
}

const indicatorColor = ['bg-[#0095FF]', 'bg-[#00E096]', 'bg-[#884DFF]', 'bg-[#FF8F0D]'];
const progressBackground = ['bg-[#CDE7FF]', 'bg-[#8CFAC7]', 'bg-[#C5A8FF]', 'bg-[#FFD5A4]'];

const colors = [
  {
    border: 'border-[#0095FF]',
    text: 'text-[#0095FF]',
    backgroundBorder: 'bg-[#0095FF]/10'
  },
  {
    border: 'border-[#00E096]',
    text: 'text-[#00E096]',
    backgroundBorder: 'bg-[#00E096]/10'
  },
  {
    border: 'border-[#884DFF]',
    text: 'text-[#884DFF]',
    backgroundBorder: 'bg-[#884DFF]/10'
  },
  {
    border: 'border-[#FF8F0D]',
    text: 'text-[#FF8F0D]',
    backgroundBorder: 'bg-[#FF8F0D]/10'
  }
];

export const columns: ColumnDef<ColumnsType>[] = [
  {
    accessorKey: 'id',
    header: '#'
  },
  {
    accessorKey: 'productName',
    header: 'Produto'
  },
  {
    accessorKey: 'leverage',
    header: 'Alavancagem',
    cell: ({ row }) => {
      const colorClass = indicatorColor[row.index % indicatorColor.length];
      const backgroundClass = progressBackground[row.index % progressBackground.length];
      return (
        <Progress
          title="Nível de alavancagem"
          indicatorColor={colorClass}
          className={`h-1 ${backgroundClass}`}
          value={row.original.leverage}
        />
      );
    }
  },
  {
    accessorKey: 'percent',
    header: '%',
    cell: ({ row }) => {
      const color = colors[row.index % colors.length];
      return (
        <span
          className={`border px-2 py-0.5 rounded-md text-xs font-semibold ${color.border} ${color.text} ${color.backgroundBorder}`}
        >
          {row.original.percent}%
        </span>
      );
    }
  }
];
