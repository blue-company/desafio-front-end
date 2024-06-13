import React from "react";

type NewsMiniCardProps = {
  className?: string;
  icon: JSX.Element;
  results: string | number;
  description: string;
  percentageText: string;
};

const NewsMiniCard: React.FC<NewsMiniCardProps> = ({
  className,
  icon,
  results,
  description,
  percentageText,
}) => {
  return (
    <div className={`flex flex-col h-fit rounded-2xl p-3  ${className}`}>
      <div className="flex flex-col ">
        <div className="py-2 w-fit rounded-full flex justify-center text-white">
          {icon}
        </div>
        <h1 className="text-xl font-bold text-blue-950">{`${results}`}</h1>
      </div>
      <p className="text-md font-semibold mt-2 text-gray-600">{description}</p>
      <p className="text-sm font-semibold text-nowrap  text-blue-400 mt-auto">
        {percentageText}
      </p>
    </div>
  );
};

export default NewsMiniCard;
