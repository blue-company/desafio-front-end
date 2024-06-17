import { ComponentPropsWithoutRef } from 'react';

export function CardIcon(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="41.000000pt"
      height="40.000000pt"
      viewBox="0 0 41.000000 40.000000"
      {...props}
    >
      <g fill="#2500FF">
        <path
          d="M125 306c-13-13-27-36-31-51-5-22 0-33 29-62 19-20 40-32 46-29 15 9 14 49-1 64-10 10-8 19 5 41 16 27 16 31 1 45-20 21-20 20-49-8zM227 243c-11-11-8-58 5-71 9-9 8-16-5-30-21-23-21-36-3-51 21-18 54 3 71 42 14 35 9 54-28 95-22 23-29 26-40 15z"
          transform="matrix(.1 0 0 -.1 0 40)"
        />
      </g>
    </svg>
  );
}
