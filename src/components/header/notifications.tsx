import { Popover, Typography } from "@mui/material";
import { Bell } from "lucide-react";
import React from "react";

const Notifications = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button
        className="bg-yellow-500/20 hover:bg-yellow-500/40 p-2 rounded-md"
        onClick={handleClick}
      >
        <Bell className="text-yellow-600" size={20} />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Typography sx={{ p: 2 }}>Duas novas vendas hoje</Typography>
        <Typography sx={{ p: 2 }}>Recuperação de senha</Typography>
      </Popover>
    </div>
  );
};

export default Notifications;
