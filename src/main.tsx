import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { routeTree } from './routeTree.gen.ts';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import AppSidebarProvider from './components/context/AppSidebarProvider.tsx';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppSidebarProvider>
      <RouterProvider router={router} />
    </AppSidebarProvider>
    <TanStackRouterDevtools router={router} initialIsOpen={false} />
  </StrictMode>
);
