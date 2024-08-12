import { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, TProps>(
  ({ className, type, name, label, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-1 text-left'>
        <label className='text-base font-semibold' htmlFor={name}>
          {label}
        </label>
        <input
          className={twMerge(
            'w-full rounded-md border p-2 outline-none focus:ring-1 focus:ring-emerald-600',
            className,
          )}
          ref={ref}
          id={name}
          name={name}
          type={type}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';
