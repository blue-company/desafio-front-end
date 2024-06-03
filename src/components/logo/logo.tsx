import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_MAIN = theme.palette.primary.main;

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          overflow: 'hidden',
          width: 60,
          height: 60,
          borderRadius: 1,
          display: 'inline-flex',
          position: 'relative',
          ...sx,
        }}
        {...other}
      >
        {/* Isso aqui é um paliativo. O cenário ideal é o SVG ter um path para renderizar a cor de dentro do ícone, 
        mas como não sei manipular SVG muito bem, tive que usar essa estratégia. */}
        <Box
          sx={{
            bgcolor: theme.palette.common.white,
            height: 40,
            width: 40,
            zIndex: -1,
            position: 'absolute',
            top: 10,
            left: 10,
          }}
        />
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 52.000000 52.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,52.000000) scale(0.100000,-0.100000)"
            fill={PRIMARY_MAIN}
            stroke="none"
          >
            <path
              d="M0 260 l0 -260 260 0 260 0 0 260 0 260 -260 0 -260 0 0 -260z m285
116 c35 -26 -4 -136 -49 -136 -36 1 -104 37 -111 60 -9 28 11 50 46 50 16 0
38 9 49 20 23 23 39 25 65 6z m116 -66 c25 -14 24 -35 -6 -86 -44 -75 -135
-112 -227 -93 -54 12 -72 29 -63 59 6 20 12 21 73 15 86 -9 113 2 158 65 40
55 38 54 65 40z"
            />
          </g>
        </svg>
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
