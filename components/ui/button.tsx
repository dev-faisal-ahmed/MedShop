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
          'rounded-md px-3 py-2 outline-none disabled:cursor-not-allowed disabled:bg-gray-400',
          variant === 'primary' && 'bg-primary text-white hover:bg-primary-700',
          variant === 'secondary' && 'bg-primary-400 text-white',
          variant === 'outline' && 'border border-primary',
          variant === 'danger' && 'bg-red-600 text-white hover:bg-red-700',
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
