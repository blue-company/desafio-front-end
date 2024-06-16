import React, { useState } from 'react';
import { MenuItem, Select, FormControl, useMediaQuery, Box, Typography, SelectChangeEvent } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { theme } from '@/themes/Theme';

const languages = [
    { code: 'en', label: 'EN (US)', icon: '/us.svg' },
    { code: 'pt-br', label: 'PT (BR)', icon: '/br.svg' },
    { code: 'es', label: 'ES (ES)', icon: '/es.svg' },
];

export function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState('pt-br');
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedLanguage(event.target.value);
    };

    return (
        <FormControl variant="standard" sx={{}}>
            <Select
                labelId="language-selector-label"
                id="language-selector"
                value={selectedLanguage}
                onChange={handleChange}
                label="Idioma"
                IconComponent={ArrowDropDownIcon}
                displayEmpty={!isLargeScreen}
                sx={{
                    '&::before': {
                        borderBottom: 'none !important',
                    },
                    '&::after': {
                        borderBottom: 'none !important',
                    },
                    '& .MuiSelect-standard': {
                        paddingLeft: '0 !important',
                    },
                }}
            >
                {languages.map((language) => (
                    <MenuItem key={language.code} value={language.code}>
                        {isLargeScreen ? (
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                                <Box sx={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "50%",
                                    backgroundImage: `url(${language.icon})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}>
                                </Box>
                                <Typography sx={{ fontWeight: "700", marginLeft: "1rem", textAlign: "center" }}>{language.label}</Typography>
                            </Box>
                        ) : (
                            <Box sx={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "50%",
                                backgroundImage: `url(${language.icon})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}>
                            </Box>
                        )}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
