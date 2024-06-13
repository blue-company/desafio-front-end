import { Avatar, Popover, Button } from "@mui/material";
import { ChevronDown, Settings, LogOut } from "lucide-react";
import { MouseEvent, useState } from "react";
import React from "react";


const UserCard = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const handleClick = (event: MouseEvent<Element>) => {
    setAnchorEl(event.currentTarget as HTMLDivElement);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="flex gap-2">
      <Avatar
        variant="rounded"
        alt="Remy Sharp"
        src="/avatar-user.png"
        sx={{ width: 46, height: 46 }}
      />
      <div className="flex flex-col">
        <div className="flex gap-2 items-center">
          <h2 className="text-sm text-blue-950 font-semibold">Lucas Campos</h2>
          <ChevronDown
            size={16}
            onClick={handleClick}
            className="cursor-pointer hover:text-blue-900"
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Button
                sx={{
                  textTransform: "none",
                  color: "black",
                  justifyContent: "flex-start",
                }}
                onClick={handleClose}
                startIcon={<Settings size={16} />}
              >
                Configurações
              </Button>
              <Button
                sx={{
                  textTransform: "none",
                  color: "black",
                  justifyContent: "flex-start",
                }}
                onClick={handleClose}
                startIcon={<LogOut size={16} />}
              >
                Sair
              </Button>
            </div>
          </Popover>
        </div>
        <span className="text-xs font-semibold text-gray-500">
          Desenvolvedor
        </span>
      </div>
    </div>
  );
};

export default UserCard;
