import { cn } from '@/lib/utils';
import { forwardRef, useState, type Dispatch, type SetStateAction } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Button from './button';
import type { OrderParams } from '@/lib/types';

type ExampleCustomInputProps = {
  className?: string;
  value?: string;
  onClick?: () => void;
};

const ExampleCustomInput = forwardRef<HTMLButtonElement, ExampleCustomInputProps>(
  ({ value, onClick, className }, ref) => (
    <Button
      variant="ghost"
      className={cn(
        'flex flex-row items-center w-full md:min-w-[200px] bg-white py-2 px-4 rounded-sm text-sm font-normal',
        className
      )}
      onClick={onClick}
      ref={ref}
    >
      {value ? (
        value
      ) : (
        <span className="flex w-full lg:items-center gap-2 text-muted">
          Filter by date range <MdOutlineKeyboardArrowDown size={16} className="stroke-muted" />
        </span>
      )}
    </Button>
  )
);

type Props = {
  setFilterParams: Dispatch<SetStateAction<OrderParams>>;
};

export default function DateRangePicker({ setFilterParams }: Props) {
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    const hasBothField = start && end;

    const newFilterParams = {
      date_gte: hasBothField ? start?.toISOString() : undefined,
      date_lte: hasBothField ? end?.toISOString() : undefined,
    };
    setFilterParams((prev) => ({
      ...prev,
      date_gte: newFilterParams.date_gte,
      date_lte: newFilterParams.date_lte,
    }));
  };

  return (
    <div className="flex flex-col justify-start items-start w-full md:w-fit">
      <DatePicker
        selectsRange
        isClearable
        closeOnScroll
        toggleCalendarOnIconClick
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        placeholderText="Filter by date range  &#8595;"
        className="text-muted text-sm focus:ring-0 focus:ring-offset-0 w-full py-2 px-4"
        customInput={
          <ExampleCustomInput className="flex flex-row items-center w-full bg-white py-2 px-4 rounded-sm text-sm font-normal" />
        }
        monthsShown={1}
      />
    </div>
  );
}
