import type { Metadata } from 'next';
import { LoginForm } from './_components/login.form';

export const metadata: Metadata = {
  title: 'Login | MedShop',
};

export default function LoginPage() {
  return (
    <main className='flex h-full items-center justify-center'>
      <div className='w-full max-w-[450px] rounded-xl border-emerald-200 bg-white p-6 text-center shadow'>
        <h3 className='text-2xl font-semibold'>
          Welcome to <span className='text-primary'>MedShop!</span>
        </h3>
        <p className='mt-2 text-gray-500'>Enter your details to login</p>
        <LoginForm />
      </div>
    </main>
  );
}
