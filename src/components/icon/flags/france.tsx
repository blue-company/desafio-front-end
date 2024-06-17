import { ComponentPropsWithoutRef } from 'react';

export function FranceFlag(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="190 50 500 550"
      width={900}
      height={600}
      {...props}>
      <path fill="#ED2939" d="M0 0H900V600H0z" />
      <path fill="#fff" d="M0 0H600V600H0z" />
      <path fill="#002395" d="M0 0H300V600H0z" />
    </svg>
  );
}
