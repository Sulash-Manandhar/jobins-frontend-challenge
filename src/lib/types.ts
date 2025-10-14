export type OrderStatus = 'pending' | 'canceled' | 'completed';

export type Order = {
  id: number;
  customer: string;
  date: string;
  total: string;
  method: 'CC' | 'PayPal' | 'Bank';
  status: OrderStatus;
};

export type DefaultParams = Partial<{
  _limit: number;
  _page: number;
  _start: number;
  _end: number;
  q?: string;
}>;

export type WithDefaultParams<T> = T & DefaultParams;

export type OrderParams = Partial<
  WithDefaultParams<{
    name_like?: string;
    status?: OrderStatus;
  }>
>;

export type Meta = {
  count: number;
  link: string;
};

export type LinkObject = {
  first: string;
  last: string;
  next: string;
};
