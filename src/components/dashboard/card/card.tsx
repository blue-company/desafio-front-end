import React, { ReactNode } from "react";

interface DashboardCardProps {
  children?: ReactNode;
  className?: string;
  title: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  children,
  className,
  title,
}) => {
  return (
    <div className={`shadow-xl p-4 flex flex-col ${className}`}>
      <h1 className="text-lg font-bold text-blue-950">{title}</h1>
      {children}
    </div>
  );
};

export default DashboardCard;
