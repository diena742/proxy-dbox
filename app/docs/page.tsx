import { EndpointCard } from "@/components/EndpointCard";
import { TryIt } from "@/components/TryIt";
import { Sidebar } from "@/components/Sidebar";

export default function Docs() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-8 space-y-6">
        <h1 className="text-3xl font-bold">Dramabox Public API</h1>

        <EndpointCard
          method="GET"
          path="/episode/{id}"
          desc="Get episode detail"
        />
        <TryIt url="https://dbox-token.vercel.app/api/episode/579583716" />

        <EndpointCard
          method="GET"
          path="/series/{id}/episodes"
          desc="List episodes"
        />
        <TryIt url="https://dbox-token.vercel.app/api/series/41000106154/episodes" />

        <EndpointCard
          method="GET"
          path="/play/{episodeId}"
          desc="Play stream"
        />
        <TryIt url="https://dbox-token.vercel.app/api/play/579583716" />
      </main>
    </div>
  );
}