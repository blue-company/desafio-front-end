import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { Loader } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  `ring-offset-background inline-flex items-center justify-center rounded-md text-sm font-medium
    transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary rounded-md',
        danger:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive',
        outline:
          'border-input hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring border',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus-visible:ring-secondary',
        ghost: 'hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring',
        link: 'text-primary focus-visible:ring-ring underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loadingSize?: number;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { loading, loadingSize = 20, className, variant, size, asChild = false, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        disabled={loading}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}>
        {loading ? <Loader size={loadingSize} className="animate-spin" /> : children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
