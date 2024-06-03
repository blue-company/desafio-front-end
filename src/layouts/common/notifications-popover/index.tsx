import { m } from 'framer-motion';

import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';

import Iconify from 'src/components/iconify';
import { varHover } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function NotificationsPopover() {
  const drawer = useBoolean();
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        color={drawer.value ? 'primary' : 'default'}
        onClick={drawer.onTrue}
        sx={{
          borderRadius: 1,
          color: theme.palette.warning.main,
          bgcolor: theme.palette.warning.lighter,
          '&:hover': {
            bgcolor: theme.palette.warning.light,
            color: isDark ? theme.palette.common.black : theme.palette.common.white,
          },
        }}
      >
        <Badge variant="dot" color="error">
          <Iconify icon="clarity:bell-line" width={24} />
        </Badge>
      </IconButton>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 1, maxWidth: 420 },
        }}
      >
        <Stack height="100%" justifyContent="center" alignItems="center">
          <Typography variant="h4">Notificações aqui</Typography>
        </Stack>
      </Drawer>
    </>
  );
}
