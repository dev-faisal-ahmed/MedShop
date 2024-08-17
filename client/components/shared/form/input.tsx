import { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, TProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-1 text-left'>
        <label className='font-semibold'>{label}</label>
        <input
          className={twMerge(
            'w-full rounded-md border p-2 outline-none focus-within:ring-1 focus-within:ring-primary',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName;
