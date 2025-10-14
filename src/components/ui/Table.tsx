import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type PropsWithChildren<T = object> = {
  children: ReactNode;
  className?: string;
} & T;

const tableRowVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

const Table = ({ children, className }: PropsWithChildren) => {
  return <table className={cn('overflow-scroll', className)}>{children}</table>;
};

const TableHeader = ({ children, className }: PropsWithChildren) => {
  return <thead className={cn('border-b border-border', className)}>{children}</thead>;
};
const TableHead = ({ children, className }: PropsWithChildren) => {
  return <th className={cn('text-left text-muted text-xs uppercase py-4 px-5 font-medium', className)}>{children}</th>;
};

const TableBody = ({ children, className }: PropsWithChildren) => {
  return <tbody className={cn(className)}>{children}</tbody>;
};

const TableRow = ({
  children,
  className,
  index = 0,
}: PropsWithChildren<{
  index?: number;
}>) => {
  return (
    <motion.tr
      custom={index}
      initial="hidden"
      animate="visible"
      variants={tableRowVariants}
      className={cn('border-b border-border', className)}
    >
      {children}
    </motion.tr>
  );
};

const TableCell = ({
  children,
  className,
  colSpan,
}: PropsWithChildren<{
  colSpan?: number;
}>) => {
  return (
    <td colSpan={colSpan} className={cn('py-4.5 px-5 text-sm', className)}>
      {children}
    </td>
  );
};

export { Table, TableHeader, TableHead, TableBody, TableRow, TableCell };
