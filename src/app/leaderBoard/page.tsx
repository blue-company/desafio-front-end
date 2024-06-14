import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { rows } from "@/utils/data.charts";
import { Typography } from "@mui/material";

interface Row {
  id: number;
  position: string;
  Nome: string | null;
  Sobrenome: string;
  idade: number;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 0 },
  {
    field: "position",
    headerName: "Posição de vendas",
    width: 250,
    editable: true,
  },
  {
    field: "Nome",
    headerName: "Nome",
    width: 250,
    editable: true,
  },
  {
    field: "Sobrenome",
    headerName: "Sobrenome",
    width: 200,
    editable: true,
  },
  {
    field: "idade",
    headerName: "Idade",
    type: "number",
    width: 200,
  },
];

const addPositionToRows = (rows: Row[]): Row[] => {
  return rows.map((row, index) => ({
    ...row,
    position: (index + 1).toString(),
  }));
};

const DataGridDemo: React.FC = () => {
  const rowsWithPosition = addPositionToRows(rows);

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Typography variant="h2" sx={{fontWeight: 'bold', fontFamily: 'Poppins' }}>
        Melhores vendededores 🏆
      </Typography>
      <Box sx={{ width: "80%" }}>
        <DataGrid
          style={{ backgroundColor: "#ffffffc1", color: "black", borderRadius: 30 }}
          rows={rowsWithPosition}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 12,
              },
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Grid>
  );
};

export default DataGridDemo;
