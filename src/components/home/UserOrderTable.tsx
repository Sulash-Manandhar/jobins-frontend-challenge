import { useOrderListQuery } from '@/hooks/query/order';
import type { LinkObject, Order, OrderParams } from '@/lib/types';
import { cn, getStatus, mapTabs } from '@/lib/utils';
import type { UseQueryResult } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useOrderTabsContext } from '../context/OrderTabsProvider';
import Button from '../ui/button';
import Card from '../ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/Table';
import UserOrderFilterBar from './UserOrderFilterBar';
type RenderTableBodyProps = {
  data: UseQueryResult<
    {
      data: Order[];
      meta: {
        total: number;
        link: LinkObject;
      };
    },
    Error
  >;
};

function RenderTableBody({ data: queryData }: RenderTableBodyProps) {
  const { data, isLoading } = queryData;
  if (isLoading) {
    return (
      <TableRow>
        <TableCell colSpan={7} className="text-center text-sm text-muted italic">
          Loading...
        </TableCell>
      </TableRow>
    );
  }

  if (!data || data?.data?.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={7} className="text-center text-sm text-muted italic">
          No orders found
        </TableCell>
      </TableRow>
    );
  }

  return (
    <>
      {data.data.map((item) => (
        <TableRow key={item.id}>
          <TableCell>#{item.id}</TableCell>
          <TableCell>{item.customer}</TableCell>
          <TableCell>{item.date}</TableCell>
          <TableCell>{item.total}</TableCell>
          <TableCell>{item.method}</TableCell>
          <TableCell className={cn('font-semibold text-warning capitalize', getStatus(item.status))}>
            {item.status}
          </TableCell>
          <TableCell className="text-primary">
            <Button variant="ghost" size="sm" className="text-primary px-1">
              View Detail
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default function UserOrderTable() {
  const { activeTab } = useOrderTabsContext();

  const [filterParams, setFilterParams] = useState<OrderParams>({
    _page: 1,
    _limit: 8,
    status: mapTabs(activeTab),
  });

  useEffect(() => {
    setFilterParams({ ...filterParams, status: mapTabs(activeTab) });
  }, [activeTab]);

  const queryData = useOrderListQuery(filterParams);

  return (
    <div className="flex flex-col gap-5.5">
      <UserOrderFilterBar filterParams={filterParams} setFilterParams={setFilterParams} />

      <Card className="flex items-start justify-start w-full p-0 rounded-2xl ">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <RenderTableBody data={queryData} />
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
