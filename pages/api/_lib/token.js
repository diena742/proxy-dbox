let cached = { token: null, exp: 0 };

export async function getToken() {
  const now = Date.now();
  if (cached.token && cached.exp > now + 60_000) return cached.token;

  const r = await fetch("https://dbox-token.vercel.app/api/token");
  const j = await r.json();

  cached.token = j.token;
  cached.exp = now + 10 * 60_000;
  return cached.token;
}