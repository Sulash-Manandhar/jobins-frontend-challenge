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
      className={`h-dvh grid grid-cols-[260px_1fr] overflow-hidden  ${isOpen ? 'grid-cols-[260px_1fr]' : 'grid-cols-[auto_1fr]'}`}
    >
      <AppSidebar />
      <section className="py-3 px-6.5  overflow-scroll">
        <Outlet />
      </section>
    </main>
  );
}
