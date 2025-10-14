import { useOrderTabsContext } from '../context/OrderTabsProvider';
import Button from '../ui/button';
import Card from '../ui/Card';

const USER_ORDER_STATS = [
  {
    name: 'Total Order',
    value: 150,
  },
  {
    name: 'Completed',
    value: 140,
  },
  {
    name: 'Canceled',
    value: 10,
  },
];

export default function UserProfile() {
  const { tabs, activeTab, onTabChange } = useOrderTabsContext();

  return (
    <Card className="flex flex-col items-start pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2 w-full mb-6">
        <section className="flex items-center lg:justify-center lg:py-0  lg:p-0 gap-2 h-full">
          <div className="relative grid place-items-center size-15 lg:size-18 bg-purple rounded-full">
            <div className="bg-white/30 size-12 lg:size-14 rounded-full" />
          </div>
          <div>
            <h2 className="text-base font-semibold lg:text-lg">Robert Fox</h2>
            <p className="text-xs lg:text-sm text-muted">robert@gmail.com</p>
          </div>
        </section>
        <section className="lg:border-l lg:pl-6 border-border h-full">
          <h2 className="uppercase font-medium text-xs text-muted mb-3">Personal Information</h2>
          <div>
            <dl className="grid grid-cols-2 gap-4">
              <dt className="text-xs">Contact Number</dt>
              <dd className="text-xs font-semibold">(201) 555-0124</dd>
              <dt className="text-xs">Date of birth</dt>
              <dd className="text-xs font-semibold">1 Jan, 1985</dd>
              <dt className="text-xs">Member Since</dt>
              <dd className="text-xs font-semibold">3 March, 2023</dd>
            </dl>
          </div>
        </section>
        <section className=" lg:border-l lg:pl-6 border-border h-full">
          <h2 className="uppercase font-medium text-xs text-muted mb-3">Shipping Address</h2>
          <p className="text-xs mb-6.5">3517 W. Gray St. Utica, Pennsylvania 57867</p>
          <article className="grid grid-cols-1 gap-4  md:grid-cols-3">
            {USER_ORDER_STATS.map((item) => (
              <div key={item.name} className="flex flex-col gap-1">
                <p className="text-2xl font-bold">{item.value}</p>
                <h3 className="text-xs text-muted font-medium">{item.name}</h3>
              </div>
            ))}
          </article>
        </section>
      </div>
      <div className="flex flex-row gap-2 w-full">
        {tabs.map((item) => (
          <Button
            key={item}
            variant="ghost"
            onClick={() => onTabChange(item)}
            className={`w-15  sm:w-auto rounded-b-none lg:px-6 lg:py-4 text-xs capitalize transition-all duration-100 focus:ring-0 focus:ring-offset-0  ${activeTab === item ? 'border-b-2 border-primary text-primary' : 'text-muted'} `}
          >
            {item}
          </Button>
        ))}
      </div>
    </Card>
  );
}
