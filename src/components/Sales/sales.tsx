import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import IosShareIcon from '@mui/icons-material/IosShare';
import { SalesCard, SalesCardProps } from "./salesCard";
import AssessmentIcon from '@mui/icons-material/Assessment';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ModeIcon from '@mui/icons-material/Mode';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export function Sales() {
    const cards: SalesCardProps[] = [
        {
            cardBgColor: "pink.light",
            iconBgColor: "pink.main",
            icon: <AssessmentIcon />,
            salesAmount: "R$ 1,000",
            salesText: "Total de vendas",
            salesChange: "8% a mais que ontem"
        },
        {
            cardBgColor: "yellow.light",
            iconBgColor: "yellow.main",
            icon: <StickyNote2Icon />,
            salesAmount: "300",
            salesText: "Total de contratos",
            salesChange: "5% a mais que ontem"
        },
        {
            cardBgColor: "green.light",
            iconBgColor: "green.main",
            icon: <ModeIcon />,
            salesAmount: "5",
            salesText: "Implantadas",
            salesChange: "1,2% a mais que ontem"
        },
        {
            cardBgColor: "purple.light",
            iconBgColor: "purple.main",
            icon: <PersonAddAlt1Icon />,
            salesAmount: "8",
            salesText: "Novos Contratos",
            salesChange: "0,5% a mais que ontem"
        },
    ];

    return (
        <Card sx={{
            padding: "2rem",
            borderRadius: "1.5rem",
        }}>
            <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "center", mb: { xs: 2, lg: 0 } }}>
                <Box>
                    <Typography variant="h6" fontWeight="bold" color="text.primary">Vendas Hoje</Typography>
                    <Typography color="secondary.contrastText" sx={{ mt: "0.25rem" }}>Resumo de vendas</Typography>
                </Box>
                <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<IosShareIcon />}
                    sx={{
                        fontSize: "0.75rem",
                        padding: "0.5rem",
                        height: { xs: "36px", lg: "40px" },
                        borderRadius: "0.5rem",
                    }}
                >
                    Exportar
                </Button>
            </Stack>
            <Grid container spacing={1} sx={{ mt: "2rem" }}>
                {cards.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={6} lg={6} xl={3}>
                        <SalesCard
                            cardBgColor={card.cardBgColor}
                            iconBgColor={card.iconBgColor}
                            icon={card.icon}
                            salesAmount={card.salesAmount}
                            salesText={card.salesText}
                            salesChange={card.salesChange}
                        />
                    </Grid>
                ))}
            </Grid>
        </Card>
    )
}
