import Image from "next/image";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineTicket } from "react-icons/hi";

interface GenericSubComponentProps {
  size: number;
  rightImage: any;
  leftImage: any;
  firstValue: string;
  secondValue: string;
  leftLabel: string;
  secondLabel: string;
  display: string;
}

export const GenericSubComponent: React.FC<GenericSubComponentProps> = ({
  leftImage,
  size,
  rightImage,
  firstValue,
  secondValue,
  leftLabel,
  secondLabel,
  display,
}) => {
  return (
    <div>
      <hr
        className="w-[90%] h-[0.8px] bg-[#ddd] mx-auto mt-[-1rem] "
        style={{ display }}
      />
      <div className="flex justify-center gap-3 mt-1">
        <div className="flex items-center flex-col">
          <div className="flex items-center gap-4 mt-1">
            <Image width={size} src={leftImage} alt="Icon" />
            <span className="font-semibold font-[Poppins] text-md text-[#a6a6a6]">
              {leftLabel}
            </span>
          </div>
          <span className="text-lg font-semibold">{firstValue}</span>
        </div>
        <div className="h-10 flex items-center">
          <hr className="h-5 w-[0.10px] bg-[#DDD]" />
        </div>
        <div className="flex items-center flex-col">
          <div className="flex items-center gap-4 mt-1">
            <Image width={size} src={rightImage} alt="Icon" />
            <span className="font-semibold font-[Poppins] text-md text-[#a6a6a6]">
              {secondLabel}
            </span>
          </div>
          <span className="text-lg font-semibold">{secondValue}</span>
        </div>
      </div>
    </div>
  );
};

interface RealChartsI {
  Icon: any;
  Title: string;
  Label: string;
  Value: string;
  background: any;
  color: string;
}

export const RealChartsComponent = ({
  Icon,
  Title,
  Label,
  Value,
  background,
  color,
}: RealChartsI) => {
  return (
    <div className="gap-3 flex mt-[-1rem] items-center justify-center  ">
      <div className="flex items-center flex-col">
        <div className="flex items-center gap-4 mt-1">
          <span
            className=" rounded-2xl w-10 h-10 flex items-center justify-center"
            style={{ background: background }}
          >
            {Icon}
          </span>
          <div>
            <h5 className="font-semibold font-[Poppins]">{Title}</h5>
            <p className="text-[#a6a6a6]">{Label}</p>
          </div>
          <div>
            <p className="text-md font-semibold" style={{ color: color }}>
              {Value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
