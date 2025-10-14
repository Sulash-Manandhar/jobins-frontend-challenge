import { DEFAULT_LIMIT } from '@/lib/constant';
import type { OrderParams } from '@/lib/types';
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  filterParams: OrderParams;
  totalCount?: number;
  setFilterParams: Dispatch<SetStateAction<OrderParams>>;
};

export default function PageLimit({ filterParams, setFilterParams, totalCount = DEFAULT_LIMIT }: Props) {
  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setFilterParams({ ...filterParams, _limit: Number(e.target.value) });
  };

  return (
    <div className="flex items-center gap-1 text-sm text-muted">
      Showing&nbsp;
      <select
        value={filterParams._limit}
        onChange={onSelectChange}
        className="bg-transparent text-sm text-muted border border-border rounded-sm"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>{' '}
      of {totalCount}
    </div>
  );
}
