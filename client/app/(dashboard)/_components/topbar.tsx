'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { usePathname } from 'next/navigation';
import { TLoggedUser } from '@/app/_utils/types';
import { generateTitle } from '@/app/_utils/helpers';
import { ProfileIcon } from '@/components/shared/profile.icon';
import { IoMdMenu } from 'react-icons/io';
import { Sidebar } from './sidebar';

type TProps = { user: TLoggedUser };

export function Topbar({ user }: TProps) {
  const pathName = usePathname();

  return (
    <nav className='flex items-center justify-between p-6'>
      <div className='block lg:hidden'>
        <Dialog.Root>
          <Dialog.DialogTrigger asChild>
            <span>
              <IoMdMenu size={24} />
            </span>
          </Dialog.DialogTrigger>
          <Dialog.DialogPortal>
            <Dialog.DialogOverlay className='absolute inset-0 h-screen bg-black/50'>
              <Dialog.DialogContent className='h-full max-w-[240px] bg-white outline-none'>
                <Sidebar />
              </Dialog.DialogContent>
            </Dialog.DialogOverlay>
          </Dialog.DialogPortal>
        </Dialog.Root>
      </div>
      <h2 className='text-xl font-semibold text-primary'>
        {generateTitle(pathName)}
      </h2>
      <ProfileIcon {...user} />
    </nav>
  );
}
