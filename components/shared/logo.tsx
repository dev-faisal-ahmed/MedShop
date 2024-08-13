import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { FaLeaf } from 'react-icons/fa';

type TProps = {
  className?: string;
};

export function Logo({ className }: TProps) {
  return (
    <Link
      className={twMerge(
        'flex items-center gap-2 text-2xl font-bold',
        className,
      )}
      href={'/'}
    >
      <FaLeaf className='text-primary' />
      <span>
        Med
        <span className='text-primary'>Shop</span>
      </span>
    </Link>
  );
}
