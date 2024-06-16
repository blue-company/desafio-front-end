// Importações necessárias
import { Box, ThemeProvider } from "@mui/material";
import { Dashboard } from "@/components/dashboard/dashboard";
import Header from "@/components/header/header";
import { SideMenu } from "@/components/menu-lateral/side-menu";



export default function Home() {

  return (

    <Box sx={{ display: 'flex' }}>
      <SideMenu />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Header />
        <Dashboard />
      </Box>
    </Box>

  );
}
