import { queryKeys } from '@/lib/queryKeys';
import { useQuery } from '@tanstack/react-query';
import * as orderApi from '@/lib/api/order';
import type { OrderParams } from '@/lib/types';

export const useOrderListQuery = (query: OrderParams) => {
  return useQuery({
    queryKey: queryKeys.order.list(query),
    queryFn: async () => {
      const response = await orderApi.findAll(query);
      return response;
    },
    refetchOnWindowFocus: true,
  });
};
