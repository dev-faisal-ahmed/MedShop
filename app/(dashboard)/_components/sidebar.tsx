'use client';

import { sidebarLinks } from '@/app/_data/links';
import { Logo } from '@/components/shared/logo';
import { twMerge } from 'tailwind-merge';
import { SidebarLink } from './sidebar.link';

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={twMerge(
        'sticky left-0 top-0 flex h-screen min-w-[250px] flex-col bg-white p-6',
        className,
      )}
    >
      <Logo className='justify-center' />
      <div className='mt-6 flex flex-col gap-2'>
        {sidebarLinks.map((link) => (
          <SidebarLink key={link.url} {...link} />
        ))}
      </div>
    </aside>
  );
}
