function DashboardCard({ children, width }) {
  return (
    <div
      className={`flex items-center justify-center w-[90%] min-[1030px]:w-[45%] ${width} px-5 py-4 bg-white rounded-xl overflow-hidden`}
    >
      {children}
    </div>
  );
}

export default DashboardCard;
