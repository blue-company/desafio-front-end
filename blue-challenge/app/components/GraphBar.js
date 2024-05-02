export function GraphBar({ percentageData, color, background }) {
  return (
    <div className="flex items-center w-full">
      <div className={`w-full h-1 ${background} rounded-xl overflow-hidden`}>
        <div
          className={`h-full rounded-xl ${color}`}
          style={{ width: `${percentageData}%` }}
        ></div>
      </div>
    </div>
  );
}

export function GraphPercentage({
  percentageData,
  borderColor,
  background,
  textColor,
}) {
  return (
    <div className="flex items-center w-full">
      <div
        className={`flex items-center justify-center border-2 ${background} ${borderColor} w-[55px] h-5 rounded-lg text-[10px] ${textColor}`}
      >
        <span>{percentageData}%</span>
      </div>
    </div>
  );
}
