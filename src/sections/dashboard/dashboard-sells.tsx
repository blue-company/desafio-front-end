import { Box, Card, Grid, Stack, Button, useTheme, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';

export default function DashboardSells() {
  const theme = useTheme();

  const miniCardInfo = [
    {
      id: 1,
      backgroundColor: theme.palette.error.lighter,
      iconColor: theme.palette.error.light,
      icon: 'solar:chart-square-bold',
      value: 'R$ 1.000',
      cardName: 'Total de vendas',
      aditionalInfo: '+8% a mais que ontem',
    },
    {
      id: 2,
      backgroundColor: theme.palette.warning.lighter,
      iconColor: theme.palette.warning.light,
      icon: 'solar:file-text-bold',
      value: '300',
      cardName: 'Total de contratos',
      aditionalInfo: '+5% a mais que ontem',
    },
    {
      id: 3,
      backgroundColor: theme.palette.success.lighter,
      iconColor: theme.palette.success.light,
      icon: 'solar:tag-bold',
      value: '5',
      cardName: 'Implantadas',
      aditionalInfo: '+1,2% a mais que ontem',
    },
    {
      id: 4,
      backgroundColor: theme.palette.secondary.lighter,
      iconColor: theme.palette.secondary.light,
      icon: 'solar:user-plus-rounded-bold',
      value: '8',
      cardName: 'Novos contratos',
      aditionalInfo: '+0,5% a mais que ontem',
    },
  ];

  return (
    <Card sx={{ p: 2, width: '100%', height: '100%' }}>
      <Stack gap={2} sx={{ height: '100%', justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack>
            <Typography variant="h5">Vendas hoje</Typography>
            <Typography variant="body1" color="text.disabled">
              Resumo de vendas
            </Typography>
          </Stack>
          <Button variant="outlined" startIcon={<Iconify icon="solar:upload-line-duotone" />}>
            Exportar
          </Button>
        </Stack>
        <Grid container gap={1} justifyContent="center">
          {miniCardInfo.map((card) => (
            <MiniCards key={card.id} card={card} />
          ))}
        </Grid>
      </Stack>
    </Card>
  );
}

interface CardProps {
  card: {
    id: number;
    backgroundColor: string;
    iconColor: string;
    icon: string;
    value: string;
    cardName: string;
    aditionalInfo: string;
  };
}

function MiniCards({ card }: CardProps) {
  return (
    <Grid
      item
      xs={12}
      md={2.8}
      sx={{
        p: 2,
        height: 220,
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: card.backgroundColor,
          opacity: 0.4,
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 1,
          borderRadius: 5,
          width: 'fit-content',
          height: 'fit-content',
          bgcolor: card.iconColor,
        }}
      >
        <Iconify icon={card.icon} width={25} height={25} color="white" />
      </Box>
      <Typography variant="h5">{card.value}</Typography>
      <Typography variant="subtitle2">{card.cardName}</Typography>
      <Typography variant="caption" fontWeight={500} color="info.dark">
        {card.aditionalInfo}
      </Typography>
    </Grid>
  );
}
