import { useOrderListQuery } from '@/hooks/query/order';
import type { LinkObject, Order, OrderParams } from '@/lib/types';
import { cn, formatCurrency, formatDate, getStatus, getTotalPages, mapTabs } from '@/lib/utils';
import type { UseQueryResult } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useOrderTabsContext } from '../context/OrderTabsProvider';
import Button from '../ui/button';
import Card from '../ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/Table';
import UserOrderFilterBar from './UserOrderFilterBar';
import Pagination from '../ui/Pagination';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from '@/lib/constant';
import PageLimit from '../ui/PageLimit';
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
          <TableCell>{formatDate(item.date)}</TableCell>
          <TableCell>{formatCurrency(item.total)}</TableCell>
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
    _page: DEFAULT_PAGE,
    _limit: DEFAULT_LIMIT,
    status: mapTabs(activeTab),
  });

  useEffect(() => {
    setFilterParams({ ...filterParams, status: mapTabs(activeTab) });
  }, [activeTab]);

  const queryData = useOrderListQuery(filterParams);

  const setPage = (page: number) => {
    setFilterParams((prev) => ({
      ...prev,
      _page: page,
    }));
  };

  const totalPages = getTotalPages(queryData?.data?.meta?.total, filterParams._limit);

  return (
    <div className="flex flex-col gap-5.5">
      <UserOrderFilterBar filterParams={filterParams} setFilterParams={setFilterParams} />

      <Card className="flex flex-col items-start justify-start w-full p-0 rounded-2xl rounded-b-none">
        <div className="overflow-scroll w-full">
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
        </div>
        <div className="bg-white p-2 rounded-2xl rounded-t-none w-full  shadow-sm px-6 py-4 flex flex-col gap-4 sm:flex-row items-center justify-between">
          <PageLimit
            filterParams={filterParams}
            setFilterParams={setFilterParams}
            totalCount={queryData?.data?.meta?.total}
          />
          <Pagination totalPage={totalPages} initialPage={filterParams._page} setPage={setPage} />
        </div>
      </Card>
    </div>
  );
}
