'use client';

import { ClientOnly } from '@/components/shared/client.only';
import { Input } from '@/components/shared/form/input';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';
import { errorFormatter } from '@/app/_utils/helpers';
import { useVerification } from './use.verification';

export function VerificationForm() {
  const { states, handlers, form } = useVerification();
  const { time, error, loading } = states;
  const { verificationForm } = form;
  const { onVerification, onResendVerificationCode } = handlers;

  return (
    <ClientOnly>
      {/* using client only to encounter hydration error */}
      <main className='flex h-full items-center justify-center'>
        <div className='w-full max-w-[450px] rounded-xl border-emerald-200 bg-white p-6 text-center shadow'>
          <h3 className='text-2xl font-semibold'>Please Verify Your Account</h3>
          <p className='mt-2 text-gray-500'>
            Remaining Time :{' '}
            <span className='text-base text-primary'>{time}</span>S
          </p>
          {time === 0 && !loading && (
            <p
              onClick={onResendVerificationCode}
              className='mt-2 cursor-pointer font-bold text-primary hover:underline'
            >
              Resend Code
            </p>
          )}
          <form className='mt-4' onSubmit={onVerification}>
            <Input
              label='Code'
              placeholder='Input Code'
              {...verificationForm.register('code')}
            />
            {/* errors */}
            {error && (
              <div className='mt-3 rounded-md bg-red-50 p-1 text-red-500'>
                {error}
              </div>
            )}

            {errorFormatter(verificationForm.formState.errors).map(
              (err, index) => (
                <p
                  className='mt-3 rounded-md bg-red-50 p-1 text-red-500'
                  key={index}
                >
                  {err}
                </p>
              ),
            )}

            {/* loading */}
            {loading && <Loader className='mt-6' />}

            <Button disabled={time === 0} className='mt-6 w-full'>
              Verify
            </Button>
          </form>
        </div>
      </main>
    </ClientOnly>
  );
}
