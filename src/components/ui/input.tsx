import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;

}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, type = "search", ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 items-center rounded-md border border-stone-400 pl-3 text-stone-400 text-sm ring-offset-background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
          className
        )}
      >
        {icon}
        <input
          {...props}
          type={type}
          ref={ref}
          className="w-full p-1 bg-[#F9FAFB] placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
