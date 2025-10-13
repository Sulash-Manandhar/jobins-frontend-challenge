import { cn } from '@/lib/utils';

type Props = {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
};
export default function Divider({ orientation, className }: Props) {
  const classNameBuilder = orientation === 'horizontal' ? 'w-[100px] h-0.5' : 'h-[100px] w-0.5';
  return <hr className={cn(`border-none m-0 bg-[#DBDADE] ${classNameBuilder}`, className)} />;
}
