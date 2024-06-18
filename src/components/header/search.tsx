import React, { useState } from 'react';
import { TextField, InputAdornment, Box, useTheme, IconButton, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from 'react-i18next';

export function SearchBar() {
    const theme = useTheme();
    const [expanded, setExpanded] = useState(false);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    const toggleSearch = () => {
        setExpanded(!expanded);
    };

    const { t } = useTranslation();

    return (
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: isSmallScreen ? 'flex-start' : 'center', position: 'relative' }}>
            {isSmallScreen ? (
                <IconButton onClick={toggleSearch} sx={{ zIndex: 100, ml: 0, position: 'relative' }}>
                    <SearchIcon sx={{ color: theme.palette.primary.main }} />
                </IconButton>
            ) : (
                <TextField
                    variant="outlined"
                    placeholder={t('search')}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        width: '100%',
                        maxWidth: '500px',
                        borderRadius: '220px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '220px',
                        },
                    }}
                />
            )}

            {isSmallScreen && expanded && (
                <TextField
                    variant="outlined"
                    placeholder="Pesquisar informações"
                    autoFocus
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: theme.palette.primary.main }} />
                            </InputAdornment>
                        ),
                    }}
                    onBlur={() => setExpanded(false)}
                    sx={{
                        position: 'fixed',
                        top: '25px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 'calc(100vw - 32px)',
                        zIndex: 9999,
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: '220px',
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '220px',
                        },
                    }}
                />
            )}
        </Box>
    );
}
