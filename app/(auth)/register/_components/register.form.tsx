'use client';

import { useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { IoIosArrowForward } from 'react-icons/io';
import { Input } from '@/components/shared/form/input';
import { ImageInput } from '@/components/shared/form/image.input';
import { PassWordInput } from '@/components/shared/form/password.input';

export function RegisterForm() {
  const [image, setImage] = useState<File[] | null>(null);
  const [page, setPage] = useState(1);

  return (
    <>
      <form className='mt-6 flex flex-col gap-3' action=''>
        {/* Back Button */}
        {page === 2 && (
          <div
            onClick={() => setPage(1)}
            className='bg-primary-400 flex w-fit cursor-pointer items-center gap-1 rounded-full py-1 pl-1 pr-3 font-semibold text-white'
          >
            <IoIosArrowBack size={18} />
            Go Back
          </div>
        )}

        {/* page 1 content */}

        {page === 1 && (
          <>
            <Input label='Name' name='name' placeholder='Input Your Email' />
            <Input
              label='Email'
              name='email'
              type='email'
              placeholder='Input Your Email'
            />
            <PassWordInput label='Password' placeholder='Input Your Password' />
          </>
        )}

        {/* page 2 content */}
        {page === 2 && (
          <>
            <ImageInput
              images={image}
              setImages={setImage}
              id='user-image'
              label='Image'
            />
            <Button className='mt-6'>Submit</Button>
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
