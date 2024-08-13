'use client';

import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/shared/form/input';
import { ImageInput } from '@/components/shared/form/image.input';
import { PasswordInput } from '@/components/shared/form/password.input';
import { Loader } from '@/components/ui/loader';
import { useRegister } from './use.register';
import { errorFormatter } from '@/helpers';

export function RegisterForm() {
  const { states, handlers, form } = useRegister();
  const { images, page, error, loading } = states;
  const { setImage, setPage, onRegister } = handlers;
  const { register, formState } = form;

  return (
    <>
      <form onSubmit={onRegister} className='mt-6 flex flex-col gap-3'>
        {/* Back Button */}
        {page === 2 && (
          <div
            onClick={() => setPage(1)}
            className='flex w-fit cursor-pointer items-center gap-1 rounded-full bg-primary-400 py-1 pl-1 pr-3 font-semibold text-white'
          >
            <IoIosArrowBack size={18} />
            Go Back
          </div>
        )}

        {/* page 1 content */}
        {page === 1 && (
          <>
            <Input
              {...register('name')}
              label='Name'
              placeholder='Input Your Email'
              type='text'
            />
            <Input
              {...register('email')}
              label='Email'
              placeholder='Input Your Email'
              type='email'
            />
            <PasswordInput
              {...register('password')}
              label='Password'
              placeholder='Input Your Email'
            />
          </>
        )}

        {/* page 2 content */}
        {page === 2 && (
          <>
            <ImageInput
              images={images}
              setImages={setImage}
              id='user-image'
              label='Image'
            />
            {/* showing all errors */}
            {error && (
              <div className='rounded-md bg-red-100 p-1 text-xs text-red-500'>
                {error}
              </div>
            )}

            {/* loading */}
            {loading && <Loader />}

            {errorFormatter(formState.errors).length > 0 && (
              <div className='flex flex-col gap-1 rounded-md bg-red-100 p-1 text-xs'>
                {errorFormatter(formState.errors).map((err, index) => (
                  <p className='text-red-500' key={index}>
                    {err}
                  </p>
                ))}
              </div>
            )}
            <Button disabled={loading} className='mt-6'>
              Register
            </Button>
          </>
        )}
      </form>

      {/* Next Button */}
      {page === 1 && (
        <Button
          onClick={() => setPage(2)}
          className='ml-auto mt-6 flex items-center gap-2 pl-3 pr-2'
          variant='secondary'
        >
          Go Next <IoIosArrowForward />
        </Button>
      )}
    </>
  );
}
