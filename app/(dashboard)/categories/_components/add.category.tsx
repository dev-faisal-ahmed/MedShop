'use client';

import { ImageInput } from '@/components/shared/form/image.input';
import { Input } from '@/components/shared/form/input';
import { Select } from '@/components/shared/form/select';
import { Modal } from '@/components/shared/modal';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const options = [
  { value: 'PRIMARY', text: 'Primary' },
  { value: 'SECONDARY', text: 'Secondary' },
  { value: 'TERTIARY', text: 'Tertiary' },
];

export function AddCategory() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<File[] | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>();

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onOptionSelection = (value: string) => setSelectedOption(value);

  return (
    <div>
      <Button onClick={onOpen}>Add Category</Button>
      <Modal isOpen={isOpen} onClose={onClose} title='Add Category Details'>
        <form className='flex flex-col gap-3'>
          <Select
            options={['PRIMARY', 'SECONDARY', 'TERTIARY']}
            label='Type'
            placeholder='Select Any Category Type'
            onOptionSelect={onOptionSelection}
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
