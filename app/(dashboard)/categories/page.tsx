import type { Metadata } from 'next';
import { authGuard } from '@/app/_utils/actions';

export const metadata: Metadata = {
  title: 'Categories | Dashboard | MedShop',
};

export default async function Categories() {
  await authGuard('SUPER_ADMIN', 'ADMIN');
  return <div>hi I am admin</div>;
}
