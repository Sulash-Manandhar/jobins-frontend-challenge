import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { LinkObject, OrderStatus } from './types';
import type { TabsType } from '@/components/context/OrderTabsProvider';
import { DEFAULT_LIMIT, DEFAULT_PAGE } from './constant';

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

export function formatDate(date: string | null) {
  if (!date) return '-';
  const newDate = new Date(date);
  return newDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export function getTotalPages(totalCount: number = DEFAULT_PAGE, limit: number = DEFAULT_LIMIT) {
  return Math.ceil(totalCount / limit);
}
