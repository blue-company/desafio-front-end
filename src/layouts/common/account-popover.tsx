import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { Stack, Button, Avatar, Divider, MenuItem, Typography } from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';
import { useMockedUser } from 'src/hooks/use-mocked-user';

import Iconify from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

import SettingsButton from './settings-button';

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: 'Perfil',
    linkTo: '/',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const router = useRouter();

  const mdUp = useResponsive('up', 'md');

  const { user } = useMockedUser();

  const popover = usePopover();

  const handleLogout = async () => {
    try {
      popover.onClose();
      router.replace('/');
      alert('Logout logic here');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickItem = (path: string) => {
    popover.onClose();
    router.push(path);
  };

  return (
    <>
      <Button
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        endIcon={<Iconify icon={`solar:alt-arrow-${popover.open ? 'up' : 'down'}-line-duotone`} />}
        sx={{
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(popover.open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.grey[300]} 0%, ${theme.palette.grey[300]} 100%)`,
          }),
        }}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          <Avatar
            src={user?.photoURL}
            alt={user?.displayName}
            sx={{
              width: 36,
              height: 36,
              border: (theme) => `solid 2px ${theme.palette.background.default}`,
            }}
          >
            {user?.displayName?.charAt(0).toUpperCase()}
          </Avatar>
          <Stack>
            {mdUp && <Typography variant="button">{user?.displayName}</Typography>}
            {mdUp && <Typography variant="caption">{user?.job}</Typography>}
          </Stack>
        </Stack>
      </Button>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 200, p: 0 }}>
        <SettingsButton popover={popover} sx={{ position: 'absolute', top: 5, right: 5 }} />
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main' }}
        >
          Logout
        </MenuItem>
      </CustomPopover>
    </>
  );
}
