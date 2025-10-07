export default function App() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2>Fonts</h2>
        <p className="text-2xl">Regular</p>
        <p className="text-2xl font-medium ">Medium</p>
        <p className="text-2xl font-semibold ">Semibold</p>
        <p className="text-2xl font-bold ">Bold</p>
      </div>
      <div>
        <h2>Colors</h2>
        <p className="text-default">Blue</p>
        <p className="text-danger">Red</p>
        <p className="text-warning">Yellow</p>
        <p className="text-muted">Muted</p>
      </div>
    </div>
  );
}
