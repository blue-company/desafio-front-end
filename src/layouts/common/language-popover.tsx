import { m } from 'framer-motion';
import { useCallback } from 'react';

import { Button } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import Iconify from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'English (US)',
    value: 'en',
    icon: 'flagpack:us',
  },
  {
    label: 'French',
    value: 'fr',
    icon: 'flagpack:fr',
  },
  {
    label: 'Vietnamese',
    value: 'vi',
    icon: 'flagpack:vn',
  },
  {
    label: 'Chinese',
    value: 'cn',
    icon: 'flagpack:cn',
  },
  {
    label: 'Arabic',
    value: 'ar',
    icon: 'flagpack:sa',
  },
];

export default function LanguagePopover() {
  const popover = usePopover();

  const currentLang = allLangs[0];

  const handleChangeLang = useCallback(() => {
    popover.onClose();
  }, [popover]);

  return (
    <>
      <Button
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          ...(popover.open && {
            bgcolor: 'action.selected',
          }),
        }}
        startIcon={<Iconify icon={currentLang.icon} sx={{ borderRadius: '100%', width: 25 }} />}
      >
        {currentLang.label}
      </Button>
      {/* <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          ...(popover.open && {
            bgcolor: 'action.selected',
          }),
        }}
      >
        <Iconify icon={currentLang.icon} sx={{ borderRadius: 0.65, width: 28 }} />
      </IconButton> */}

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 160 }}>
        {allLangs.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={handleChangeLang}
          >
            <Iconify icon={option.icon} sx={{ borderRadius: 0.65, width: 28 }} />

            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
