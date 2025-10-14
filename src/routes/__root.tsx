import AppSidebar from '@/components/common/AppSidebar';
import { useAppSidebar } from '@/components/context/AppSidebarProvider';
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

function RootComponent() {
  const { isOpen } = useAppSidebar();
  return (
    <main
      className={`h-dvh grid grid-cols-[260px_1fr] overflow-hidden  ${isOpen ? 'grid-cols-[260px_1fr]' : 'grid-cols-[auto_1fr]'}`}
    >
      <AppSidebar />
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 2 }}
        className="px-2 py-3 lg:px-6.5  overflow-scroll"
      >
        <Outlet />
      </motion.section>
    </main>
  );
}
