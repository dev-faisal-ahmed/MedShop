import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseSharp } from 'react-icons/io5';

type TProps = PropsWithChildren & {
  isOpen: boolean;
  onClose: () => void;
  title: string;
};

export function Modal({ title, isOpen, onClose, children }: TProps) {
  if (!isOpen) return null;

  return createPortal(
    <section
      onClick={onClose}
      className='fixed inset-0 flex h-screen items-center justify-center bg-black/20'
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className='mx-5 w-full max-w-[450px] rounded-md bg-white py-6'
      >
        <div className='flex items-center justify-between border-b border-gray-300 px-6 pb-3'>
          <h2 className='text-base font-semibold'>{title}</h2>
          <span
            onClick={onClose}
            className='cursor-pointer rounded-full p-1 duration-300 hover:bg-gray-300'
          >
            <IoCloseSharp size={20} />
          </span>
        </div>
        <div className='mt-5 px-6'>{children}</div>
      </div>
    </section>,
    document.body,
  );
}
