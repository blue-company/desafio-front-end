import { ComponentPropsWithoutRef } from 'react';

export function BackgroundLogin(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      {...props}
    >
      <path fill="#0035DA" d="M0 0H800V800H0z" />
      <g fill="none" stroke="#FFF">
        <path d="M769 229l268 31.9M927 880L731 737l-211-77-211-122-269 61 255 165-168.5 115.5L40 599l-237-106 299-111-133-153L126.5 79.5-69-63" />
        <path d="M-31 229l268 32 153 121 213 111-294.5 44.5-207-156M370 905l-75-141" />
        <path d="M520 660l58 182 153-105 109-138-237-106-83 167-225 104 14-226 81-156 149-113 230-40L577.5 41.5 370 105 295-36 126.5 79.5 237 261 102 382 40 599-69 737l196 143" />
        <path d="M520-140l58.5 182.5L731-63M603 493l-64-224-302-8 133-156m532 277L539 269M390 382H102" />
        <path d="M-222 42l348.5 37.5L370 105l169 164 38.5-227.5L927 80 769 229l133 153-299 111 128 244M295-36l282.5 77.5M578 842l-283-78M40-201l87 281m-25 302l-363-113" />
      </g>
      <g fill="#0E86B2">
        <circle cx={769} cy={229} r={5} />
        <circle cx={539} cy={269} r={5} />
        <circle cx={603} cy={493} r={5} />
        <circle cx={731} cy={737} r={5} />
        <circle cx={520} cy={660} r={5} />
        <circle cx={309} cy={538} r={5} />
        <circle cx={295} cy={764} r={5} />
        <circle cx={40} cy={599} r={5} />
        <circle cx={102} cy={382} r={5} />
        <circle cx={127} cy={80} r={5} />
        <circle cx={370} cy={105} r={5} />
        <circle cx={578} cy={42} r={5} />
        <circle cx={237} cy={261} r={5} />
        <circle cx={390} cy={382} r={5} />
      </g>
    </svg>
  );
}
