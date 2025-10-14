import { createContext, useContext, useState } from 'react';

export type TabsType = 'all orders' | 'completed' | 'canceled' | 'pending';
const TABS: TabsType[] = ['all orders', 'completed', 'canceled'];

type OrderTabsContextProps = {
  tabs: TabsType[];
  activeTab: TabsType;
  onTabChange: (tabs: TabsType) => void;
};

const OrderTabsContext = createContext<OrderTabsContextProps | null>(null);

export const useOrderTabsContext = () => {
  const context = useContext(OrderTabsContext);
  if (!context) {
    throw new Error('useOrderTabsContext must be used within an OrderTabsProvider');
  }
  return context;
};

type OrderTabsProviderProps = {
  children: React.ReactNode;
};

const OrderTabsProvider = ({ children }: OrderTabsProviderProps) => {
  const [activeTab, setActiveTab] = useState<TabsType>('all orders');

  const onTabChange = (tab: TabsType) => {
    setActiveTab(tab);
  };

  return (
    <OrderTabsContext.Provider
      value={{
        tabs: TABS,
        activeTab,
        onTabChange,
      }}
    >
      {children}
    </OrderTabsContext.Provider>
  );
};

export default OrderTabsProvider;
