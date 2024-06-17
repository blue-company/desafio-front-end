import { forwardRef } from "react";
import { VariantProps } from "tailwind-variants";
import { InputStyles } from "./style";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputStyles> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={InputStyles({ className, icon })}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
