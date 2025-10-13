import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export default function Card({ children }: Props) {
  return <div className="bg-white p-6 rounded-2xl shadow-md overflow-hidden">{children}</div>;
}
