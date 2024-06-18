import React, { useState, useEffect } from 'react';
import { MenuItem, Select, FormControl, useMediaQuery, Box, Typography, SelectChangeEvent } from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { createTheme } from '@mui/material/styles';
import i18n from '../../locale/i18n';

const languages = [
    { code: 'en', label: 'EN (US)', icon: '/us.svg' },
    { code: 'pt', label: 'PT (BR)', icon: '/br.svg' },
    { code: 'es', label: 'ES (ES)', icon: '/es.svg' },
];

export function LanguageSelector() {
    const [selectedLanguage, setSelectedLanguage] = useState(() => {

        if (typeof window !== 'undefined') {
            const savedLanguage = localStorage.getItem('selectedLanguage');
            return savedLanguage || 'pt';
        } else {
            return 'pt';
        }
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedLanguage', selectedLanguage);
            i18n.changeLanguage(selectedLanguage);
        }
    }, [selectedLanguage]);

    const isLargeScreen = useMediaQuery(createTheme().breakpoints.up('lg'));

    const handleChange = (event: SelectChangeEvent<string>) => {
        const selectedLangCode = event.target.value;
        setSelectedLanguage(selectedLangCode);
    };

    return (
        <FormControl variant="standard">
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
                        {isLargeScreen && (
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
                        )}
                        {!isLargeScreen && (
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
