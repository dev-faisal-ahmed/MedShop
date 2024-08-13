'use client';

import { createPortal } from 'react-dom';

type TProps = {
  isOpen: boolean;
  onClose?: () => void;
};

export function Sheet({ isOpen, onClose }: TProps) {
  return isOpen
    ? createPortal(
        <div
          onClick={onClose}
          className='fixed inset-0 h-screen w-full bg-black/60'
        ></div>,
        document.body,
      )
    : null;
}
