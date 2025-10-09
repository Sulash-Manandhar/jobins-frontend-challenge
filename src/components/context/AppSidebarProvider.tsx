import { useIsMobile } from '@/hooks/use-mobile';
import useLocalStorage from '@/hooks/useLocalStorage';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type AppSidebarContextType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
};

const AppSidebarContext = createContext<AppSidebarContextType | null>(null);

export const useAppSidebar = () => {
  const context = useContext(AppSidebarContext);
  if (!context) {
    throw new Error('useAppSidebar must be used within an AppSidebarProvider');
  }
  return context;
};

type AppSidebarProviderProps = {
  children: ReactNode;
};

const AppSidebarProvider = ({ children }: AppSidebarProviderProps) => {
  const [localIsOpen, setLocalIsOpen] = useLocalStorage('sidebar', true);
  const [isOpen, setIsOpen] = useState(localIsOpen);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;
    setIsOpen(false);
  }, [isMobile]);

  const toggle = () => {
    setIsOpen((prev) => !prev);
    setLocalIsOpen((prev) => !prev);
  };

  const onOpen = () => {
    setIsOpen(true);
    setLocalIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    setLocalIsOpen(false);
  };

  return (
    <AppSidebarContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        toggle,
      }}
    >
      {children}
    </AppSidebarContext.Provider>
  );
};

export default AppSidebarProvider;
