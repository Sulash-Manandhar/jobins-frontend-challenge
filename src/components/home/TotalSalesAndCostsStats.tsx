import { chart } from '@/assets/images';
import Card from '../ui/Card';

export default function TotalSalesAndCostsStats() {
  return (
    <Card>
      <div className="flex flex-col justify-start lg:flex-row lg:items-center lg:justify-between gap-10 ">
        <img src={chart} alt="Chart of total Sales & Costs over last 7 days" className="size-[73px]" />
        <article className="h-full flex flex-col gap-8 justify-between lg:border-l lg:border-border lg:pl-10">
          <div>
            <h3 className="text-lg font-semibold">Total Sales & Costs</h3>
            <p className="text-muted font-medium text-xs">Last 7 days</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-3xl font-bold ">$350k</p>

            <p className="text-muted text-xs flex gap-2">
              <span className="text-green">8.56K</span>vs last 7 days
            </p>
          </div>
        </article>
      </div>
    </Card>
  );
}
