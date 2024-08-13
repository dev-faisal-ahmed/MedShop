'use client';

import { Input } from '@/components/shared/form/input';
import { PasswordInput } from '@/components/shared/form/password.input';
import { Button } from '@/components/ui/button';
import { useLogin } from './use.login';
import { Loader } from '@/components/ui/loader';
import { errorFormatter } from '@/app/_helpers';

export function LoginForm() {
  const { states, handlers, form } = useLogin();
  const { error, isLoading } = states;
  const { formState } = form;
  const { onLogin } = handlers;

  return (
    <form onSubmit={onLogin} className='mt-6 flex flex-col gap-3'>
      {/* inputs */}
      <Input
        label='Email'
        placeholder='Input Your Email'
        {...form.register('email')}
      />

      <PasswordInput
        label='Password'
        placeholder='Input Your Password'
        {...form.register('password')}
      />

      {/* errors */}
      {error && (
        <div className='mt-3 rounded-md bg-red-50 p-1 text-red-500'>
          {error}
        </div>
      )}

      {errorFormatter(formState.errors).map((err, index) => (
        <p className='mt-3 rounded-md bg-red-50 p-1 text-red-500' key={index}>
          {err}
        </p>
      ))}

      {/* loading */}
      {isLoading && <Loader className='mt-3' />}

      {/* submit */}
      <Button disabled={isLoading} className='mt-3'>
        Login
      </Button>
    </form>
  );
}
