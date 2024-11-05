import { sleep } from "../utils/sleep.js";

async function fetchList(searchTerm) {
  if (!searchTerm) {
    return [];
  }

  await sleep();

  const encoded = encodeURIComponent(searchTerm);
  const res = await fetch(`https://search.imdbot.workers.dev/?q=${encoded}`);
  const data = await res.json();
  return data?.description;
}

export { fetchList };
