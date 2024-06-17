import { Input } from '@/components/ui/textfield/input';
import { Table } from '@tanstack/react-table';
import { DataType } from './dataTable';

interface ToolbarProps {
  table: Table<DataType>;
}

export function Toolbar({ table }: ToolbarProps) {
  return (
    <div className="flex items-center gap-4 xs:gap-0 xs:justify-between">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#151D48]">
        Rankeamento de vendas
      </h1>
      <Input
        placeholder="Filtrar pelo nome..."
        value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
        onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)}
        className="max-w-48 md:max-w-sm bg-gray-100"
      />
    </div>
  );
}
