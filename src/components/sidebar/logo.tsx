import { Heart } from "lucide-react";

const Logo = () => {
  return (
    <>
      <Heart
        size={28}
        className="bg-blue-700 w-12 h-12 p-3 text-white rounded-md"
      />
      <h1 className="text-2xl font-bold">Blue</h1>
    </>
  );
};

export default Logo;
