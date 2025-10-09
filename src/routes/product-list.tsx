import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/product-list')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/product-list"!</div>;
}
