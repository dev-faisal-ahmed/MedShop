import * as Popover from '@radix-ui/react-popover';
import { TLoggedUser } from '@/app/_utils/types';
import Image from 'next/image';
import { Button } from '../ui/button';

export function ProfileIcon(user: TLoggedUser) {
  return (
    <div className='flex items-center gap-2'>
      <h5 className='hidden text-base font-semibold text-gray-700 sm:block'>
        {user.name}
      </h5>
      <Popover.Root>
        <Popover.Trigger asChild>
          <div className='flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-primary text-xl font-bold text-white'>
            {user.image ? (
              <Image src={user.image} alt='User Image' width={20} height={20} />
            ) : (
              <div>{user.name[0]}</div>
            )}
          </div>
        </Popover.Trigger>
        <Popover.Content
          align='end'
          sideOffset={5}
          className='outline-none'
          side='bottom'
        >
          <div className='rounded-md bg-white py-3 shadow-md'>
            <div className='border-b border-gray-300 px-3 pb-2'>
              <h3 className='text-base'>{user.name}</h3>
              <p className='mt-1 text-neutral-500'>{user.email}</p>
            </div>
            <div className='mt-3 px-3'>
              <Button className='w-full' variant='danger'>
                Logout
              </Button>
            </div>
          </div>
        </Popover.Content>
      </Popover.Root>
    </div>
  );
}
