import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

type TProps = PropsWithChildren & {
  className?: string;
};

export function Container({ children, className }: TProps) {
  return (
    <section className={twMerge('mx-auto max-w-[1280px] px-5', className)}>
      {children}
    </section>
  );
}
