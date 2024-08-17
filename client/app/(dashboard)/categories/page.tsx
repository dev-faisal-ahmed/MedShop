import type { Metadata } from 'next';
import { AddCategory } from './_components/add.category';

export const metadata: Metadata = {
  title: 'Categories | Dashboard | MedShop',
};

export default function Categories() {
  return (
    <section>
      <div className='flex items-center justify-between'>
        <h1>All Categories</h1>
        <AddCategory />
      </div>
    </section>
  );
}
