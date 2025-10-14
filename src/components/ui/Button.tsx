import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type Variant = 'default' | 'ghost' | 'link';
type Size = 'default' | 'sm' | 'lg' | 'icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: React.ReactNode;
}

const baseStyles =
  'flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-1 focus:ring-offset-1';

const variants: Record<Variant, string> = {
  default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  ghost: 'text-muted hover:bg-gray focus:ring-gray-500',
  link: 'text-blue-600 underline hover:text-blue-800 focus:ring-blue-500',
};

const sizes: Record<Size, string> = {
  default: 'px-4 py-2 text-sm',
  sm: 'px-3 py-1.5 text-xs',
  lg: 'px-6 py-3 text-base',
  icon: 'p-2',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', children, className, ...rest }, ref) => {
    const combineClass = `${baseStyles} ${variants[variant]} ${sizes[size]}`;

    return (
      <button ref={ref} className={cn(combineClass, className)} {...rest}>
        {children}
      </button>
    );
  }
);

export default Button;
