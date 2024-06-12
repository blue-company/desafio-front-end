import { theme } from "@/themes/theme";
import { Button, ThemeProvider } from "@mui/material";


export default function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <ThemeProvider theme={theme}>

        <Button
          variant="contained"
          color="primary"

        >
          Primary
        </Button>
      </ThemeProvider>
    </div>
  );
}
