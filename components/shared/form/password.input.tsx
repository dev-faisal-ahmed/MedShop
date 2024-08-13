'use client';

import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { IoMdEye } from 'react-icons/io';
import { IoIosEyeOff } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';

type TProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export const PasswordInput = forwardRef<HTMLInputElement, TProps>(
  ({ className, label, ...props }, ref) => {
    const [isShown, setIsShown] = useState(false);

    return (
      <div className='flex flex-col gap-1 text-left'>
        <label className='text-base font-semibold'>{label}</label>
        <div
          className={twMerge(
            'flex w-full items-center rounded-md border p-2 outline-none focus-within:ring-1 focus-within:ring-primary',
            className,
          )}
        >
          <input
            className='w-full outline-none'
            type={isShown ? 'text' : 'password'}
            ref={ref}
            {...props}
          />
          {!isShown ? (
            <IoMdEye
              onClick={() => setIsShown(true)}
              className='cursor-pointer'
            />
          ) : (
            <IoIosEyeOff
              onClick={() => setIsShown(false)}
              className='cursor-pointer'
            />
          )}
        </div>
      </div>
    );
  },
);

PasswordInput.displayName = 'Input';
