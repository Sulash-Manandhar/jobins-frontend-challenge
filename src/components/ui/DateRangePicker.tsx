import { cn } from '@/lib/utils';
import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Button from './button';

type ExampleCustomInputProps = {
  className?: string;
  value?: string;
  onClick?: () => void;
};

const ExampleCustomInput = forwardRef<HTMLButtonElement, ExampleCustomInputProps>(
  ({ value, onClick, className }, ref) => (
    <Button
      variant="ghost"
      className={cn('flex flex-row items-center w-full bg-white py-2 px-4 rounded-sm text-sm font-normal', className)}
      onClick={onClick}
      ref={ref}
    >
      {value ? (
        value
      ) : (
        <span className="flex items-center gap-2 text-muted">
          Filter by date range <MdOutlineKeyboardArrowDown size={16} className="stroke-muted" />
        </span>
      )}
    </Button>
  )
);

export default function DateRangePicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
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
        popperPlacement="left"
        customInput={
          <ExampleCustomInput className="flex flex-row items-center w-full bg-white py-2 px-4 rounded-sm text-sm font-normal" />
        }
      />
    </div>
  );
}
