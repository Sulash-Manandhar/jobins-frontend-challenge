import AppSidebar from '@/components/common/AppSidebar';
import { useAppSidebar } from '@/components/context/AppSidebarProvider';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';

export const Route = createRootRoute({
  component: RootComponent,
});

const pageVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};

const renderCss = (isOpen: boolean, isMobile: boolean) => {
  if (isOpen && isMobile) {
    return 'ml-auto';
  }
  if (isOpen) {
    return 'ml-[260px]';
  }
  if (!isOpen) {
    return 'ml-[80px]';
  }
};

function RootComponent() {
  const { isOpen } = useAppSidebar();
  const isMobile = useIsMobile();

  return (
    <main className="relative h-dvh">
      <AppSidebar />
      {isOpen && isMobile && (
        <div className="fixed pointer-events-none top-0 left-0 w-dvw h-dvh bg-black/30 z-20"></div>
      )}
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 2 }}
        className={cn('px-2 py-3 lg:px-6.5 overflow-scroll z-10', renderCss(isOpen, isMobile))}
      >
        <Outlet />
      </motion.section>
    </main>
  );
}
