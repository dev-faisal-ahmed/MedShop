'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TProps = {
  title: string;
  url: string;
  icon: ReactNode;
};

export function SidebarLink({ title, url, icon }: TProps) {
  const pathName = usePathname();

  return (
    <Link
      className={twMerge(
        `flex items-center gap-3 rounded-md py-2 pl-3 pr-16 text-sm transition-colors duration-300 hover:bg-gray-400 hover:text-white`,
        pathName === url ? 'bg-primary text-white' : null,
      )}
      href={url}
    >
      {icon}
      {title}
    </Link>
  );
}
