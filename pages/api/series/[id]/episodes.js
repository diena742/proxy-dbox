import { rateLimit } from "../../_lib/ratelimit.js";
import { forward } from "../../_lib/upstream.js";

export default async function handler(req, res) {
  if (!rateLimit(req.headers["x-forwarded-for"] || "local"))
    return res.status(429).json({ error: "rate limited" });

  const { id } = req.query;
  const r = await forward(`https://api.dramabox.com/series/${id}/episodes`);
  res.json(await r.json());
}