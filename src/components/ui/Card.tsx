import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};
export default function Card({ children, className }: Props) {
  return <div className={cn('bg-white p-6 flex justify-center items-center rounded-2xl', className)}>{children}</div>;
}
