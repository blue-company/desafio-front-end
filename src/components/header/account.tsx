import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import avatarImg from "@/assets/avatar.svg";
import { DarkModeSwitch } from './darkModeSwitch';
import { useTranslation } from 'react-i18next';

export function AccountMenu() {
    const [anchorEl, setAnchorEl] = useState<EventTarget & HTMLButtonElement | null>(null);
    const isSmallScreen = useMediaQuery('(max-width:960px)'); // Adjust the breakpoint as per your design needs

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (isSmallScreen) {
            setAnchorEl(event.currentTarget as unknown as HTMLButtonElement);
        } else {
            setAnchorEl(event.currentTarget as unknown as HTMLButtonElement);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const { t } = useTranslation();

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemAvatar>
                    <Avatar
                        src={avatarImg.src}
                        sx={{
                            width: isSmallScreen ? 48 : 60,
                            height: isSmallScreen ? 48 : 60,
                            borderRadius: isSmallScreen ? '50%' : '5px',

                        }} />
                </ListItemAvatar>
                {!isSmallScreen && (
                    <ListItemText
                        primary="Paulo Freire"
                        secondary={t('admin')}
                        primaryTypographyProps={{ color: 'text.primary', fontWeight: 'bold' }}
                        secondaryTypographyProps={{ color: 'secondary.main' }}
                        sx={{ cursor: 'pointer', marginLeft: "16px" }}
                    />
                )}
                <KeyboardArrowDownOutlinedIcon />
            </ListItemButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    {t('settings')}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <LogoutIcon fontSize="small" />
                    </ListItemIcon>
                    {t('logout')}
                </MenuItem>
                <MenuItem sx={{ display: "flex", justifyContent: "center" }} >
                    <DarkModeSwitch />
                </MenuItem>
            </Menu>
        </>
    );
}
