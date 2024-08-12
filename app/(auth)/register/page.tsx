import type { Metadata } from 'next';
import { RegisterForm } from './_components/register.form';

export const metadata: Metadata = {
  title: 'Register | MedShop',
};

export default function RegisterPage() {
  return (
    <main className='flex h-full items-center justify-center'>
      <div className='w-full max-w-[450px] rounded-xl border-emerald-200 bg-white p-6 text-center shadow'>
        <h3 className='text-2xl font-semibold'>
          Welcome to <span className='text-emerald-600'>MedShop!</span>
        </h3>
        <p className='mt-2 text-gray-500'>Enter your details to register</p>
        <RegisterForm />
      </div>
    </main>
  );
}
