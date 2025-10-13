import { chart } from '@/assets/images';
import Card from '../ui/Card';
import Divider from '../ui/Divider';

export default function TotalSalesAndCostsStats() {
  return (
    <Card>
      <div className="flex flex-row items-center justify-between gap-10">
        <img src={chart} alt="Chart of total Sales & Costs over last 7 days" className="size-[73px]" />
        <Divider orientation="vertical" className="!h-[140px]" />
        <article className="h-full flex flex-col gap-8 justify-between">
          <div>
            <h3 className="text-lg font-semibold">Total Sales & Costs</h3>
            <p className="text-muted font-medium text-xs">Last 7 days</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold ">$350k</p>
            {/* TODO: ARROW */}
            <p className="text-muted text-xs">
              <span className="text-green">8.56K</span>&nbsp;&nbsp;&nbsp; vs last 7 days
            </p>
          </div>
        </article>
      </div>
    </Card>
  );
}
