import { useGetCategoriesQuery } from '@/app/_redux/services';
import { TSelectOption } from '@/app/_utils/types';
import { useState } from 'react';

const categoryTypesOptions = [
  { value: 'PRIMARY', title: 'Primary' },
  { value: 'SECONDARY', title: 'Secondary' },
  { value: 'TERTIARY', title: 'Tertiary' },
];

export const useAddCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<File[] | null>(null);
  const [type, setType] = useState<TSelectOption>();
  const [isApiLoading, setApiLoading] = useState(false);

  const {
    data: categories,
    isFetching,
    isLoading: isCategoriesLoading,
  } = useGetCategoriesQuery({
    type: type?.value,
    get: 'ALL',
  });

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onTypeChange = (value: TSelectOption) => setType(value);

  return {
    states: { isOpen, images, type },
    handlers: { setImages, onOpen, onClose, onTypeChange },
    constants: { categoryTypesOptions },
    apiData: { categories, isFetching, isCategoriesLoading, isApiLoading },
    form: {},
  };
};
