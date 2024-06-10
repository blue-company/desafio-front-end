import { Avatar } from "@mui/material";
import { ChevronDown } from "lucide-react";

const UserCard = () => {
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
          <ChevronDown size={16} />
        </div>
        <span className="text-xs font-semibold text-gray-500">
          Desenvolvedor
        </span>
      </div>
    </div>
  );
};

export default UserCard;
