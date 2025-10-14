import type { OrderParams, OrderStatus } from '@/lib/types';
import React, { type Dispatch, type SetStateAction } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useOrderTabsContext, type TabsType } from '../context/OrderTabsProvider';
import { debounce } from '@/lib/utils';
import DateRangePicker from '../ui/DateRangePicker';

type Props = {
  filterParams: OrderParams;
  setFilterParams: Dispatch<SetStateAction<OrderParams>>;
};

export default function UserOrderFilterBar({ filterParams, setFilterParams }: Props) {
  const { onTabChange } = useOrderTabsContext();

  const onDebounceInputChange = debounce((value) => {
    setFilterParams((prev) => ({
      ...prev,
      q: value,
    }));
  }, 500);

  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    const value = e.currentTarget.value;
    onTabChange(value === undefined ? 'all orders' : (value as TabsType));
    setFilterParams((prev) => ({ ...prev, status: value as OrderStatus }));
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row items-center justify-between w-full">
      <div className="w-full flex items-start flex-col gap-4 md:flex-row md:gap-2.5 md:items-center">
        <div className="w-full md:w-fit flex flex-row items-center gap-0 bg-white py-2 px-4 rounded-sm">
          <label htmlFor="status" className="text-muted text-sm">
            Status:
          </label>
          <select
            name="status"
            id="status"
            value={filterParams.status}
            onChange={onSelectChange}
            className="text-muted w-full lg:w-18 text-sm truncate"
          >
            <option value={undefined} className="text-sm text-muted">
              All
            </option>
            <option value="canceled" className="text-sm text-muted">
              Canceled
            </option>
            <option value="completed" className="text-sm text-muted">
              Completed
            </option>
          </select>
        </div>
        <div className="w-full relative bg-white py-1.5 px-4 rounded-sm md:w-fit">
          <input
            id="q"
            type="text"
            placeholder="Search..."
            aria-label="Search orders"
            value={filterParams.q}
            onChange={(e) => onDebounceInputChange(e.currentTarget.value)}
            className="w-full text-sm focus:outline-none placeholder:text-sm"
          />

          <FaSearch
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-muted text-sm fill-muted"
            size={12}
          />
        </div>
      </div>
      <DateRangePicker setFilterParams={setFilterParams} />
    </div>
  );
}
