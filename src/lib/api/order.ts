import * as axios from '../axios-interceptor';
import type { Order, OrderParams } from '../types';
import { url } from '../url';

export const findAll = (params: OrderParams) => {
  return axios.get<Order[]>({
    url: url.orders,
    params,
  });
};
