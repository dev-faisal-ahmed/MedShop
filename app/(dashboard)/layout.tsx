import { PropsWithChildren } from 'react';
import { Sidebar } from './_components/sidebar';
import { Topbar } from './_components/topbar';
import { authGuard } from '../_utils/guards/auth.guard';

export default async function AdminLayout({ children }: PropsWithChildren) {
  const user = await authGuard('SUPER_ADMIN', 'ADMIN');

  return (
    <main className='grid grid-cols-[auto_1fr]'>
      <div>
        <Sidebar className='hidden lg:flex' />
      </div>
      <section className='w-full overflow-hidden'>
        <Topbar user={user} />
        <main className='px-6'>{children}</main>
      </section>
    </main>
  );
}
