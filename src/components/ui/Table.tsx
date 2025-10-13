import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type PropsWithChildren<T = object> = {
  children: ReactNode;
  className?: string;
} & T;

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

const TableRow = ({ children, className }: PropsWithChildren) => {
  return <tr className={cn('border-b border-border', className)}>{children}</tr>;
};

const TableCell = ({ children, className }: PropsWithChildren) => {
  return <td className={cn('py-4.5 px-5 text-sm', className)}>{children}</td>;
};

export { Table, TableHeader, TableHead, TableBody, TableRow, TableCell };
