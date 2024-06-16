interface CardProps {
  title: string;
  subtitle?: string;
  button?: JSX.Element;
  children: JSX.Element;
  className?: string;
}

export function Card({ title, subtitle, button, children, className }: CardProps) {
  return (
    <div
      className={`flex flex-col gap-6 2xl:gap-0 xl:justify-between bg-white p-4 rounded-xl ${className}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-[#05004E] text-xl font-bold">{title}</h2>
          <h2 className="text-sm text-gray-500">{subtitle}</h2>
        </div>
        <div>{button}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
