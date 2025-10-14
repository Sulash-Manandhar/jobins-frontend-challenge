import type { OrderParams } from './types';

export const queryKeys = {
  order: {
    all: ['order'] as const,
    list: (query: OrderParams) => [...queryKeys.order.all, 'list', { ...query }] as const,
  },
};
