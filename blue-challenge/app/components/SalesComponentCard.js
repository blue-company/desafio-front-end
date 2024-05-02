import Image from "next/image";

function SalesComponentCard({
  backgroundColor,
  imageSrc,
  imageAlt,
  spanFirst,
  spanSecond,
  spanThird,
}) {
  return (
    <div
      className={`flex flex-col flex-wrap items-start w-120 p-3 ${backgroundColor} rounded-xl gap-1`}
    >
      <Image src={imageSrc} alt={imageAlt} width={30} height={30} />
      <span className="font-bold text-base">{spanFirst}</span>
      <span className="text-[11px] text-nowrap">{spanSecond}</span>
      <span className=" text-xxs text-[#4079ED] text-nowrap">{spanThird}</span>
    </div>
  );
}

export default SalesComponentCard;
