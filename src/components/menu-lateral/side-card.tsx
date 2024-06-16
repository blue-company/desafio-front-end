import * as React from 'react';
import Button from '@mui/material/Button';
import background from "@/assets/card-bg.svg";
import { Box, Card, CardContent, Link, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import logo from "@/assets/LogoWhite.svg";
import { useTranslation } from 'react-i18next';



export default function SideCard() {
    const theme = useTheme();
    const { t } = useTranslation();

    return (
        <Card sx={{
            maxHeight: "310px",
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "1rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
            maxWidth: "240px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // Ajuste o espaçamento entre os itens
        }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image src={logo} alt="Logo" />
            </Box>

            <CardContent>
                <Typography textAlign="center" sx={{ fontSize: "1.5rem", maxWidth: "150px", marginX: "auto" }} color="text.secondary" gutterBottom>
                    {t('meetBlue')}
                </Typography>

                <Typography textAlign="center" sx={{ fontSize: "0.875rem", marginTop: "1rem" }} color="text.secondary">
                    {t('knowMore')}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <Link href="https://www.saudeblue.com/" target="_blank">
                        <Button
                            component="a"
                            variant="contained"
                            sx={{
                                backgroundColor: theme.palette.primary.contrastText,
                                color: theme.palette.primary.main,
                                textTransform: "none",
                                fontWeight: "bold",
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.main,
                                    color: theme.palette.primary.contrastText,
                                }
                            }}
                        >
                            {t('KnowMoreButton')}
                        </Button>
                    </Link>

                </Box>
            </CardContent>
        </Card >
    );
}
