import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { LinkObject, OrderStatus } from './types';
import type { TabsType } from '@/components/context/OrderTabsProvider';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function parseLinkHeader(header: string): LinkObject {
  return header.split(', ').reduce((obj: LinkObject, part: string) => {
    const [, url, rel] = part.match(/<([^>]+)>; rel="([^"]+)"/) || [];
    if (url && rel) {
      obj[rel as keyof LinkObject] = url;
    }
    return obj;
  }, {} as LinkObject);
}

export function mapTabs(activeTab: TabsType): OrderStatus | undefined {
  switch (activeTab) {
    case 'all orders':
      return undefined;
    case 'canceled':
      return 'canceled';
    case 'completed':
      return 'completed';
    case 'pending':
      return 'pending';
    default:
      return undefined;
  }
}

export function getStatus(status: OrderStatus) {
  switch (status) {
    case 'canceled':
      return 'text-danger';
    case 'completed':
      return 'text-green';
    case 'pending':
      return 'text-warning';
    default:
      return 'text-warning';
  }
}

export function debounce(func: (value: string) => void, wait: number) {
  let timeout: number | undefined = undefined;
  return function (value: string) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(value), wait);
  };
}
