import Card from '../ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/Table';

interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  method: string;
  status: 'Pending' | 'Completed' | 'Canceled';
}

const mockOrders: Order[] = [
  {
    id: '#5089',
    customer: 'Joseph Wheeler',
    date: '6 April, 2023',
    total: '$2,564',
    method: 'CC',
    status: 'Pending',
  },
  {
    id: '#5090',
    customer: 'Joseph Wheeler',
    date: '6 April, 2023',
    total: '$2,564',
    method: 'CC',
    status: 'Pending',
  },
  {
    id: '#5091',
    customer: 'Joseph Wheeler',
    date: '6 April, 2023',
    total: '$2,564',
    method: 'CC',
    status: 'Pending',
  },
  {
    id: '#5092',
    customer: 'Joseph Wheeler',
    date: '6 April, 2023',
    total: '$2,564',
    method: 'CC',
    status: 'Pending',
  },
  {
    id: '#5093',
    customer: 'Joseph Wheeler',
    date: '6 April, 2023',
    total: '$2,564',
    method: 'CC',
    status: 'Pending',
  },
];

export default function UserOrderTable() {
  return (
    <div className="flex flex-col gap-5.5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex gap-2.5 items-center">
          <div>
            <label htmlFor="status">Status:</label>
            <select name="status" id="status">
              <option value="all">All</option>
            </select>
          </div>
          <input id="search" type="text" placeholder="Search..." aria-label="Search orders" />
        </div>
        <input type="date" id="date" />
      </div>

      <Card className="flex items-start justify-start w-full p-0 rounded-2xl ">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.customer}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.total}</TableCell>
                <TableCell>{item.method}</TableCell>
                <TableCell className="font-semibold text-warning">{item.status}</TableCell>
                <TableCell className="text-primary">View Detail</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
