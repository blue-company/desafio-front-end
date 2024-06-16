import React from 'react';
import { IconButton, Badge, useTheme } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';




export function NotificationButton({ hasNotification }: { hasNotification: boolean }) {
    const theme = useTheme();

    return (
        <IconButton aria-label="Notifications" sx={{ background: theme.palette.yellow?.dark, borderRadius: "5px" }}>
            <Badge
                invisible={!hasNotification}
                color="error"
                sx={{
                    backgroundColor: theme.palette.error.main,
                    color: theme.palette.error.contrastText,
                    top: '4px',
                    right: '4px',
                    width: '14px',
                    height: '14px',
                    border: `2px solid ${theme.palette.background.paper}`,
                    borderRadius: '50%',
                    position: 'absolute',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />
            <NotificationsOutlinedIcon fontSize="large" sx={{ color: "#F2A900" }} />
        </IconButton>
    );
};

