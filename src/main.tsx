import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { routeTree } from './routeTree.gen.ts';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import AppSidebarProvider from './components/context/AppSidebarProvider.tsx';
import OrderTabsProvider from './components/context/OrderTabsProvider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppSidebarProvider>
        <OrderTabsProvider>
          <RouterProvider router={router} />
        </OrderTabsProvider>
      </AppSidebarProvider>
    </QueryClientProvider>
    <TanStackRouterDevtools router={router} initialIsOpen={false} />
  </StrictMode>
);
