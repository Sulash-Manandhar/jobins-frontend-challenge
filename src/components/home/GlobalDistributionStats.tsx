import { australiaGlobe, brazilGlobe, usaGlobe } from '@/assets/images';
import Card from '../ui/Card';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const DISTRIBUTION_DATA = [
  {
    name: 'United State',
    changedBy: 25.8,
    user: '30k',
    image: usaGlobe,
  },
  {
    name: 'Brazil',
    changedBy: -16.2,
    user: '26k',
    image: brazilGlobe,
  },
  {
    name: 'Australia',
    changedBy: -11.9,
    user: '17k',
    image: australiaGlobe,
  },
] as const;

type DistributionType = (typeof DISTRIBUTION_DATA)[number];

type GlobalDistributionStatsItemProps = {
  item: DistributionType;
};
function GlobalDistributionStatsItem({ item }: GlobalDistributionStatsItemProps) {
  const isIncrement = item.changedBy > 0;
  const Item = isIncrement ? MdOutlineKeyboardArrowUp : MdOutlineKeyboardArrowDown;
  const absValue = Math.abs(item.changedBy);

  return (
    <li className="grid grid-cols-3 gap-4 items-center">
      <div className="flex flex-row gap-2 items-center">
        <img src={item.image} alt={`${item.name} globe`} className="size-8.5" />
        <div className="flex flex-col">
          <span className="font-semibold text-sm">{item.user}</span>
          <h4 className="text-xs text-muted">{item.name} </h4>
        </div>
      </div>
      <div>
        <div className="h-1.5 w-24 overflow-hidden rounded-full bg-[#E9E7FD]">
          <div
            className="h-full bg-primary"
            style={{ width: `${absValue * 2}%` }}
            role="progressbar"
            aria-valuenow={absValue}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${item.name} performance`}
          />
        </div>
      </div>
      <span
        className={` flex items-center font-semibold gap-1 text-sm ${isIncrement ? 'text-green' : 'text-danger'}`}
        aria-label={`${isIncrement ? 'Increased' : 'Decreased'} by ${absValue}%`}
      >
        <Item size={16} className={isIncrement ? 'text-green' : 'text-danger'} />
        {absValue}%
      </span>
    </li>
  );
}

export default function GlobalDistributionStats() {
  return (
    <Card>
      <ul className="flex flex-col gap-4.5 justify-between w-full">
        {DISTRIBUTION_DATA.map((item) => (
          <GlobalDistributionStatsItem key={item.name} item={item} />
        ))}
      </ul>
    </Card>
  );
}
