import GlobalDistributionStats from '@/components/home/GlobalDistributionStats';
import TotalProfitChart from '@/components/home/TotalProfitChart';
import TotalSalesAndCostsStats from '@/components/home/TotalSalesAndCostsStats';
import Button from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { TbBell } from 'react-icons/tb';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="flex flex-row items-center gap-5">
          <Button variant="ghost" className="relative p-0">
            <TbBell size={26} className="stroke-foreground" aria-label="Notification -4 unread" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-danger rounded-full grid place-items-center text-xs text-white">
              4
            </span>
          </Button>
          <Button variant="ghost" className="relative p-0">
            <div className="size-9 bg-purple rounded-full"></div>
            <div className="size-3 bg-green rounded-full absolute bottom-0 -right-0.5 border-2 border-white"></div>
          </Button>
        </div>
      </div>

      <section className="grid grid-cols-[400px_250px_460px] gap-3">
        <TotalSalesAndCostsStats />
        <TotalProfitChart />
        <GlobalDistributionStats />
      </section>
    </div>
  );
}
