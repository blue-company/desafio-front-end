import { ComponentPropsWithoutRef } from 'react';

export function ItalyFlag(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1500}
      height={1000}
      viewBox="0.42 0 2.1 2"
      {...props}>
      <path fill="#009246" d="M0 0H3V2H0z" />
      <path fill="#fff" d="M1 0H3V2H1z" />
      <path fill="#ce2b37" d="M2 0H3V2H2z" />
    </svg>
  );
}
