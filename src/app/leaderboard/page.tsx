import {
  TableHeader,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "~/components/ui/table";

export default function Leaderboard() {
  return (
    <div className="bg-background rounded-md grid">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Cargo</TableHead>
            <TableHead>Tempo trabalhado</TableHead>
            <TableHead>Desempenho</TableHead>
            <TableHead>Desempenho</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Carlos Eduardo</TableCell>
            <TableCell>Analista</TableCell>
            <TableCell> 5 hrs</TableCell>
            <TableCell>60%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Maria Carla</TableCell>
            <TableCell>RH</TableCell>
            <TableCell> 4 hrs</TableCell>
            <TableCell>75%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Marcelo Macedo</TableCell>
            <TableCell>Motorista</TableCell>
            <TableCell> 3 hrs</TableCell>
            <TableCell>20%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Claudia Santos</TableCell>
            <TableCell>Compliance</TableCell>
            <TableCell> 6 hrs</TableCell>
            <TableCell>50%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
