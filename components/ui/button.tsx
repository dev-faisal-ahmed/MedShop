import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
};

export const Button = forwardRef<HTMLButtonElement, TProps>(
  ({ className, children, variant = 'primary', ...props }, ref) => {
    return (
      <button
        className={twMerge(
          'rounded-md px-3 py-2',
          variant === 'primary' && 'hover:bg-primary-700 bg-primary text-white',
          variant === 'secondary' && 'bg-primary-400 text-white',
          variant === 'outline' && 'border border-primary',
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
