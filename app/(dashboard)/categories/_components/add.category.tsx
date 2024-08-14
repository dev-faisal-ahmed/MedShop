'use client';

import { ImageInput } from '@/components/shared/form/image.input';
import { Input } from '@/components/shared/form/input';
import { Select } from '@/components/shared/form/select';
import { Modal } from '@/components/shared/modal';
import { Button } from '@/components/ui/button';
import { useAddCategory } from './use.add.category';

export function AddCategory() {
  const { states, handlers, constants, apiData } = useAddCategory();
  const { images, isOpen, type } = states;
  const { setImages, onClose, onOpen, onTypeChange } = handlers;
  const { categoryTypesOptions } = constants;
  const { categories } = apiData;

  console.log({ categories });

  return (
    <div>
      <Button onClick={onOpen}>Add Category</Button>
      <Modal isOpen={isOpen} onClose={onClose} title='Add Category Details'>
        <form className='flex flex-col gap-3'>
          <Select
            options={categoryTypesOptions}
            label='Type'
            placeholder='Select Any Category Type'
            onOptionSelect={onTypeChange}
          />
          <Input label='Name' placeholder='Input Category Name' />
          <Input label='Slug' placeholder='Input Slug' />
          <ImageInput
            images={images}
            id='category-image'
            setImages={setImages}
            label='Add Image'
          />
          <Button className='mt-3'>Add Category</Button>
        </form>
      </Modal>
    </div>
  );
}
