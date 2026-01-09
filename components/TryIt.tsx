"use client";
import { useState } from "react";

export function TryIt({ url }: any) {
  const [out, setOut] = useState("");
  return (
    <div>
      <button
        className="rounded bg-black text-white px-4 py-2"
        onClick={async () => {
          const r = await fetch(url);
          setOut(JSON.stringify(await r.json(), null, 2));
        }}
      >
        Try It
      </button>
      <pre className="mt-4 text-xs overflow-auto">{out}</pre>
    </div>
  );
}