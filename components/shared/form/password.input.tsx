'use client';

import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IoMdEye } from 'react-icons/io';
import { IoIosEyeOff } from 'react-icons/io';

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const PassWordInput = forwardRef<HTMLInputElement, TProps>(
  ({ className, name, label, ...props }, ref) => {
    const [isShown, setIsShown] = useState(false);

    return (
      <div className='flex flex-col gap-1 text-left'>
        <label className='text-base font-semibold' htmlFor={name}>
          {label}
        </label>
        <div
          className={twMerge(
            'focus-within:ring-primary flex w-full items-center rounded-md border p-2 outline-none focus-within:ring-1',
            className,
          )}
        >
          <input
            className='w-full outline-none'
            ref={ref}
            id={name}
            name={name}
            type={isShown ? 'text' : 'password'}
            {...props}
          />
          {!isShown ? (
            <IoMdEye onClick={() => setIsShown(true)} />
          ) : (
            <IoIosEyeOff onClick={() => setIsShown(false)} />
          )}
        </div>
      </div>
    );
  },
);

PassWordInput.displayName = 'Input';
