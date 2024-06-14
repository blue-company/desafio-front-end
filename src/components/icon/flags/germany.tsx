import { ComponentPropsWithoutRef } from 'react';

export function GermanyFlag(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={1000} height={600} viewBox="0 0 3 3" {...props}>
      <path fill="#000" d="M0 0H5V3H0z" />
      <path fill="#D00" d="M0 1H5V3H0z" />
      <path fill="#FFCE00" d="M0 2H5V3H0z" />
    </svg>
  );
}
