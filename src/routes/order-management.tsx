import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/order-management')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/order-management"!</div>;
}
