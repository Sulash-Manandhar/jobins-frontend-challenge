import { logo } from '@/assets/images';
import { Link, useLocation } from '@tanstack/react-router';
import { TbSmartHome, TbShoppingCart, TbStar, TbCirclePlus, TbBox, TbMenu2 } from 'react-icons/tb';
import { useAppSidebar } from '../context/AppSidebarProvider';
import Button from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const NAVIGATION_ITEM = [
  {
    section: 'Main Menu',
    submenu: [
      {
        title: 'Dashboard',
        href: '/',
        icon: TbSmartHome,
      },
      {
        title: 'Order Management',
        href: '/order-management',
        icon: TbShoppingCart,
      },
      {
        title: 'Brand',
        href: '/brand',
        icon: TbStar,
      },
    ],
  },
  {
    section: 'Products',
    submenu: [
      {
        title: 'All Products',
        href: '/all-products',
        icon: TbCirclePlus,
      },
      {
        title: 'Product List',
        href: '/product-list',
        icon: TbBox,
      },
    ],
  },
];

export default function AppSidebar() {
  const { isOpen, toggle } = useAppSidebar();
  const { pathname } = useLocation();

  return (
    <aside
      className={`fixed top-0 left-0 z-30 bg-white h-dvh transition-all duration-300 transform translate-x ${isOpen ? 'w-[260px]' : 'w-[80px]'}`}
    >
      <div className={`flex items-center justify-between p-4  ${isOpen ? 'flex-row' : 'flex-col gap-4'}`}>
        {!isOpen && (
          <Link to="/" aria-label="JoBin's Dashboard" className="flex flex-row gap-2.5 items-center">
            <img src={logo} alt="JoBin's logo" className="w-8 h-7" />
          </Link>
        )}
        {isOpen && (
          <header>
            <Link to="/" aria-label="JoBin's Dashboard" className="flex flex-row gap-2.5 items-center">
              <img src={logo} alt="JoBin's logo" className="w-7 h-6" />
              <h1 className="text-[22px] font-bold">JoBins</h1>
            </Link>
          </header>
        )}
        <Button
          size="icon"
          variant="ghost"
          aria-label="Toggle sidebar"
          aria-expanded={isOpen}
          onClick={toggle}
          className={` cursor-pointer transition-all duration-300 ${isOpen && 'ml-2'}`}
        >
          <TbMenu2 size={24} className="stroke-muted" />
        </Button>
      </div>
      <nav className="px-3.5">
        {NAVIGATION_ITEM.map((section) => (
          <section key={section.section} className="mb-4">
            {isOpen && <h2 className="pl-4 text-xs uppercase text-muted py-4 px-7.5">{section.section}</h2>}
            <ul role="list">
              {section.submenu.map((menu) => {
                const Icon = menu.icon;
                const isCurrentPage = pathname === menu.href;

                return (
                  <motion.li
                    key={menu.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={menu.href}
                      aria-current={isCurrentPage ? 'page' : undefined}
                      aria-label={menu.title}
                      className={`flex items-center gap-2 py-2 px-4 ${isCurrentPage && 'bg-gray rounded-md'}`}
                    >
                      <Icon
                        size={22}
                        aria-hidden="true"
                        className={`flex-shrink-0 ${isCurrentPage ? 'stroke-foreground' : 'stroke-muted'}`}
                      />
                      <AnimatePresence>
                        {isOpen && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`text-sm capitalize font-normal ${isCurrentPage ? 'text-foreground' : 'text-muted'}`}
                          >
                            {menu.title}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  );
}
