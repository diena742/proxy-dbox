const hits = new Map();
export function rateLimit(ip, limit = 60) {
  const now = Date.now();
  const w = hits.get(ip) || { c: 0, t: now };
  if (now - w.t > 60_000) { w.c = 0; w.t = now; }
  w.c++; hits.set(ip, w);
  return w.c <= limit;
}