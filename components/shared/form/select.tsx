import { TSelectOption } from '@/app/_utils/types';
import * as SelectPrimitive from '@radix-ui/react-select';
import { FaCaretDown } from 'react-icons/fa6';
import { IoIosCheckmark } from 'react-icons/io';

type TProps = {
  label?: string;
  placeholder?: string;
  options: TSelectOption[];
  onOptionSelect: (value: TSelectOption) => void;
};

export function Select({
  label,
  placeholder,
  options,
  onOptionSelect,
}: TProps) {
  return (
    <div className='flex flex-col gap-2 text-left'>
      <label className='font-semibold'>{label}</label>
      <SelectPrimitive.Select>
        <SelectPrimitive.SelectTrigger className='flex w-full items-center justify-between rounded-md border p-2 outline-none focus-within:ring-1 focus-within:ring-primary'>
          <SelectPrimitive.SelectValue placeholder={placeholder} />
          <SelectPrimitive.SelectIcon>
            <FaCaretDown />
          </SelectPrimitive.SelectIcon>
        </SelectPrimitive.SelectTrigger>
        <SelectPrimitive.SelectPortal>
          <SelectPrimitive.SelectContent
            className='w-full rounded-md border border-primary bg-white'
            side='bottom'
            position='popper'
            sideOffset={5}
          >
            <SelectPrimitive.SelectViewport className='flex w-full min-w-[var(--radix-select-trigger-width)] flex-col gap-2 p-2'>
              {options.map((option) => (
                <SelectPrimitive.Item
                  className='flex cursor-pointer items-center justify-between rounded-md px-2 py-1 hover:bg-primary-50 hover:text-primary'
                  value={option.value}
                  key={option.value}
                  onClick={() => onOptionSelect(option)}
                >
                  <SelectPrimitive.ItemText>
                    {option.title}
                  </SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>
                    <IoIosCheckmark size={24} />
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.SelectViewport>
          </SelectPrimitive.SelectContent>
        </SelectPrimitive.SelectPortal>
      </SelectPrimitive.Select>
    </div>
  );
}
