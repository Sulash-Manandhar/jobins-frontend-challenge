import { logo, menu } from '@/assets/images';
import { Link, useLocation } from '@tanstack/react-router';
import { TbSmartHome, TbShoppingCart, TbStar, TbCirclePlus, TbBox } from 'react-icons/tb';
import { useAppSidebar } from '../context/AppSidebarProvider';
import Button from '../ui/button';

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
    <aside className="w-full bg-white h-dvh">
      <div className="flex flex-row items-center justify-between p-4 ">
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
          className="ml-2 cursor-pointer"
        >
          <img src={menu} alt="Toggle sidebar" className="w-6 h-6" />
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
                  <li key={menu.title}>
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
                      {isOpen && (
                        <span
                          className={`text-sm capitalize font-normal ${isCurrentPage ? 'text-foreground' : 'text-muted'}`}
                        >
                          {menu.title}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>
    </aside>
  );
}
