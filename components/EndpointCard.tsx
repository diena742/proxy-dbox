export function EndpointCard({ method, path, desc }: any) {
  return (
    <div className="rounded-xl border p-4 shadow">
      <div className="flex justify-between">
        <span className="font-bold">{method}</span>
        <span className="text-sm text-muted-foreground">PUBLIC</span>
      </div>
      <code className="block mt-2">{path}</code>
      <p className="mt-2 text-sm">{desc}</p>
    </div>
  );
}