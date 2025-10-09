import AppSidebar from '@/components/common/AppSidebar';
import { useAppSidebar } from '@/components/context/AppSidebarProvider';
import { Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { isOpen } = useAppSidebar();
  return (
    <main
      className={`grid grid-cols-[260px_1fr] overflow-hidden gap-6.5   ${isOpen ? 'grid-cols-[260px_1fr]' : 'grid-cols-[auto_1fr]'}`}
    >
      <AppSidebar />
      <section className="p-3">
        <Outlet />
      </section>
    </main>
  );
}
