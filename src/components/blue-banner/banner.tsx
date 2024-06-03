import React from 'react';

import { Box, Card, Button, useTheme, Typography, CardContent } from '@mui/material';

function Logo() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        height: 64,
        backgroundColor: '#FFF',
        borderRadius: 2.5,
        mx: 'auto',
        mb: 2,
      }}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="41.000000pt"
        height="40.000000pt"
        viewBox="0 0 41.000000 40.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)"
          fill={theme.palette.primary.main}
          stroke="none"
        >
          <path
            d="M125 306 c-13 -13 -27 -36 -31 -51 -5 -22 0 -33 29 -62 19 -20 40
-32 46 -29 15 9 14 49 -1 64 -10 10 -8 19 5 41 16 27 16 31 1 45 -20 21 -20
20 -49 -8z"
          />
          <path
            d="M227 243 c-11 -11 -8 -58 5 -71 9 -9 8 -16 -5 -30 -21 -23 -21 -36
-3 -51 21 -18 54 3 71 42 14 35 9 54 -28 95 -22 23 -29 26 -40 15z"
          />
        </g>
      </svg>
    </Box>
  );
}

export default function BlueBanner() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        position: 'relative',
        maxWidth: 300,
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
        color: 'white',
        borderRadius: '16px',
        boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
        mx: 2,
        mb: 4,
      }}
    >
      <CardContent sx={{ zIndex: 9 }}>
        <Logo />
        <Typography variant="h5" align="center" gutterBottom>
          Conheça a Blue
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 3 }}>
          Saiba mais informações sobre a Blue, uma operadora de saúde Health Tech
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            sx={{
              zIndex: 9,
              bgcolor: 'white',
              color: theme.palette.primary.main,
              '&:hover': {
                bgcolor: '#f0f0f0',
              },
            }}
          >
            Conhecer
          </Button>
        </Box>
      </CardContent>
      <Box
        sx={{
          position: 'absolute',
          height: 300,
          width: 300,
          borderRadius: 100,
          background: 'linear-gradient(to right, #ffffff, #3a3a3a)',
          top: -150,
          right: -100,
          opacity: 0.2,
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          height: 300,
          width: 300,
          borderRadius: 100,
          background: 'linear-gradient(to left, #ffffff, #3a3a3a)',
          bottom: -150,
          left: -200,
          opacity: 0.2,
          zIndex: 1,
        }}
      />
    </Card>
  );
}
