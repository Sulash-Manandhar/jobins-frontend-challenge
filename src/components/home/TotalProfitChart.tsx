import { yen } from '@/assets/images';
import Card from '../ui/Card';

export default function TotalProfitChart() {
  return (
    <Card>
      <div className="flex flex-col items-center justify-between h-full gap-10">
        <div className="flex flex-row gap-5">
          <img src={yen} alt="Total Profit in yen" className="size-10" />
          <div>
            <h3 className="text-lg font-semibold">Total Profit</h3>
            <p className="text-muted font-medium text-xs">Last 7 days</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold ">$350k</p>
          <p className="text-muted text-xs">
            <span className="text-green">12%</span>&nbsp;&nbsp;&nbsp; vs last 7 days
          </p>
        </div>
      </div>
    </Card>
  );
}
