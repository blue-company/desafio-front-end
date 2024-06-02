import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { Theme, SxProps } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';

import Iconify from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

type ReturnType = {
  onClose: VoidFunction;
  open: HTMLElement | null;
  onOpen: (event: React.MouseEvent<HTMLElement>) => void;
  setOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

type Props = {
  sx?: SxProps<Theme>;
  popover?: ReturnType;
};

export default function SettingsButton({ popover, sx }: Props) {
  const settings = useSettingsContext();

  const handleClickSettings = () => {
    popover?.onClose();

    settings.onToggle();
  };

  return (
    <Badge
      color="error"
      variant="dot"
      invisible={!settings.canReset}
      sx={{
        [`& .${badgeClasses.badge}`]: {
          top: 8,
          right: 8,
        },
        ...sx,
      }}
    >
      <Box
        component={m.div}
        animate={{
          rotate: [0, settings.open ? 0 : 360],
        }}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          aria-label="settings"
          onClick={handleClickSettings}
          sx={{
            width: 40,
            height: 40,
          }}
        >
          <Iconify icon="solar:settings-bold-duotone" width={24} />
        </IconButton>
      </Box>
    </Badge>
  );
}
