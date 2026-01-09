import { getToken } from "./token.js";

export async function forward(url) {
  const token = await getToken();
  return fetch(url, {
    headers: {
      "authorization": `Bearer ${token}`,
      "content-type": "application/json"
    }
  });
}