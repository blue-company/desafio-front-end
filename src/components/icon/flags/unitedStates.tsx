import { ComponentPropsWithoutRef } from 'react';

export function UnitedStatesFlag(props: ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={1235}
      height={650}
      viewBox="1000 0 3910 3900"
      {...props}>
      <path d="M0 0h7410v3900H0" fill="#b31942" />
      <path
        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
        stroke="#FFF"
        strokeWidth={300}
      />
      <path d="M0 0h2964v2100H0" fill="#0a3161" />
      <g fill="#FFF">
        <g id="d">
          <g id="c">
            <g id="e">
              <g id="b">
                <path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                <use xlinkHref="#a" y={420} />
                <use xlinkHref="#a" y={840} />
                <use xlinkHref="#a" y={1260} />
              </g>
              <use xlinkHref="#a" y={1680} />
            </g>
            <use xlinkHref="#b" x={247} y={210} />
          </g>
          <use xlinkHref="#c" x={494} />
        </g>
        <use xlinkHref="#d" x={988} />
        <use xlinkHref="#c" x={1976} />
        <use xlinkHref="#e" x={2470} />
      </g>
    </svg>
  );
}
