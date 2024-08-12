'use client';

import Image from 'next/image';
import { BsCloudUploadFill } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react';

type TProps = {
  label?: string;
  id: string;
  images: File[] | null;
  setImages: Dispatch<SetStateAction<File[] | null>>;
};

export function ImageInput({ label, id, images, setImages }: TProps) {
  const [index, setIndex] = useState(0);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleImagesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files!);
    setImages(files);
  };

  const goNext = () => {
    setIndex((prev) => prev + 1);
  };

  const goBack = () => {
    setIndex((prev) => prev - 1);
  };

  const deleteImage = () => {
    if (imageRef.current) imageRef.current.files = null;
    setImages(null);
  };

  return (
    <div className='flex w-full flex-col gap-1 text-left'>
      <label className='text-base font-semibold'>{label}</label>
      {images && images.length ? (
        <>
          <div className='relative h-52 overflow-hidden rounded-md'>
            <Image
              className='h-full object-cover object-center'
              src={URL.createObjectURL(images[index])}
              width={500}
              height={500}
              alt='user-image'
            />

            {/* image delete */}
            <div
              onClick={deleteImage}
              className='absolute right-1 top-1 z-10 cursor-pointer rounded-md bg-black/60 p-1 shadow'
            >
              <IoCloseSharp className='text-white' size={20} />
            </div>
          </div>

          {/* go back */}
          {images.length > 1 && (
            <div className='mt-3 flex items-center justify-center gap-3'>
              {index > 0 && (
                <div
                  onClick={goBack}
                  className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-300'
                >
                  <MdOutlineArrowBackIos />
                </div>
              )}

              <BsThreeDots size={24} />

              {/* go next */}
              {index < images.length - 1 && (
                <div
                  onClick={goNext}
                  className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-300'
                >
                  <MdOutlineArrowForwardIos />
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <label
          className='flex h-28 cursor-pointer flex-col items-center justify-center rounded-md border border-gray-300'
          htmlFor={id}
        >
          <BsCloudUploadFill size={50} />
          <p className='text-gray-500'>Upload Photo</p>
        </label>
      )}

      <input
        ref={imageRef}
        id={id}
        type='file'
        multiple
        onChange={handleImagesChange}
        className='hidden'
      />
    </div>
  );
}
