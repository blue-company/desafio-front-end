import { CardIcon } from '../icon/cardIcon';

export function BlueCard() {
  return (
    <div className="relative bg-[#2500FF] text-white rounded-2xl mb-5 overflow-hidden">
      <div className="relative z-10 py-5">
        <div className="flex justify-center items-center size-10 bg-white rounded-lg mx-auto mb-4">
          <CardIcon />
        </div>
        <div className="flex flex-col mb-2 items-center font-semibold">
          <span>Conheça a</span>
          <span>Blue</span>
        </div>
        <p className="text-center text-xs font-medium mb-4 max-w-52 text-gray-300">
          Saiba mais informações sobre a Blue, uma operadora de saúde Health Tech
        </p>
        <div className="flex justify-center">
          <button className="z-10 bg-white text-[#2500FF] py-2 px-4 rounded font-bold hover:bg-gray-200">
            Conhecer
          </button>
        </div>
      </div>
      <div className="absolute h-72 w-72 rounded-full bg-gradient-to-r from-white to-gray-500 top-[-180px] right-[-115px] opacity-20 z-0"></div>
      <div className="absolute h-72 w-72 rounded-full bg-gradient-to-l from-white to-gray-500 bottom-[-150px] left-[-200px] opacity-20 z-0"></div>
    </div>
  );
}
