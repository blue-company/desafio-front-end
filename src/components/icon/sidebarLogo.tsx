import { ComponentPropsWithoutRef } from 'react';

export function SidebarLogo(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.000000 52.000000" {...props}>
      <path
        d="M0 260V0h520v520H0V260zm285 116c35-26-4-136-49-136-36 1-104 37-111 60-9 28 11 50 46 50 16 0 38 9 49 20 23 23 39 25 65 6zm116-66c25-14 24-35-6-86-44-75-135-112-227-93-54 12-72 29-63 59 6 20 12 21 73 15 86-9 113 2 158 65 40 55 38 54 65 40z"
        transform="matrix(.1 0 0 -.1 0 52)"
        fill="#2500FF"
      />
    </svg>
  );
}
