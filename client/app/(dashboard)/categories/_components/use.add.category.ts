import { useGetCategoriesQuery } from '@/app/_redux/services';
import { TSelectOption } from '@/app/_utils/types';
import { useState } from 'react';

const categoryTypesOptions = [
  { value: 'PRIMARY', title: 'PRIMARY' },
  { value: 'SECONDARY', title: 'SECONDARY' },
  { value: 'TERTIARY', title: 'TERTIARY' },
];

export const useAddCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState<File[] | null>(null);
  const [type, setType] = useState<TSelectOption>();
  const [category, setCategory] = useState<TSelectOption>();
  const [isApiLoading, setApiLoading] = useState(false);

  const {
    data: categories,
    isFetching,
    isLoading: isCategoriesLoading,
  } = useGetCategoriesQuery({
    type: type?.value,
    get: 'ALL',
  });

  // handler
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onTypeChange = (value: TSelectOption) => setType(value);
  const onCategoryChange = (value: TSelectOption) => setCategory(value);

  // functions
  const makeCategoriesOptions = () => {
    return categories
      ?.filter((category) => category.type === type?.value)
      .map((category) => ({ value: category._id, title: category.name }));
  };

  return {
    states: { isOpen, images, type },
    handlers: { setImages, onOpen, onClose, onTypeChange, onCategoryChange },
    constants: { categoryTypesOptions },
    apiData: { isFetching, isCategoriesLoading, isApiLoading },
    functions: { makeCategoriesOptions },
    form: {},
  };
};
