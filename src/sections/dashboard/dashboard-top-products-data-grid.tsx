import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Card, Stack, CardProps, CardHeader, LinearProgress } from '@mui/material';

import Label from 'src/components/label';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
}

const linearProgressColors = ['#1976d2', '#388e3c', '#7b1fa2', '#f57c00'];

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'product',
    headerName: 'Produto',
    width: 200,
    editable: false,
  },
  {
    field: 'value',
    headerName: 'Alavancagem',
    width: 300,
    renderCell: (params) => {
      const color = linearProgressColors[params.row.id % linearProgressColors.length];
      return (
        <Stack direction="row" alignItems="center" gap={2} height="100%">
          <Box sx={{ width: '100%' }}>
            <LinearProgress
              variant="determinate"
              value={params.row.value}
              sx={{ '& .MuiLinearProgress-bar': { backgroundColor: color } }}
            />
          </Box>{' '}
          <Label variant="outlined" sx={{ borderColor: color, color }}>
            {params.row.value}%
          </Label>
        </Stack>
      );
    },
  },
];

const rows = [
  { id: 0, product: 'BLUE START ENF SC', value: 45 },
  { id: 1, product: 'BLUE START ENF CO', value: 29 },
  { id: 2, product: 'BLUE START APT CO', value: 18 },
  { id: 3, product: 'BLUE START APT SC', value: 25 },
];

export default function TopProductsDataGrid({ title, subheader }: Props) {
  return (
    <Card sx={{ p: 1, maxHeight: 400, height: '100%' }}>
      <Stack justifyContent="space-between" height="100%" gap={5}>
        <CardHeader title={title} subheader={subheader} />
        <DataGrid
          disableColumnFilter
          disableColumnSorting
          disableDensitySelector
          disableColumnMenu
          disableRowSelectionOnClick
          hideFooter
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
        />
      </Stack>
    </Card>
  );
}
