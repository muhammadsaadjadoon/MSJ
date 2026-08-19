export default async () => {
  return new Response(JSON.stringify({
    status: "ok",
    site: "Muhammad Saad Jadoon Portfolio",
    contactBackend: "Netlify Forms",
    runtime: "Netlify Functions"
  }), { headers: { "content-type": "application/json; charset=utf-8" } });
};
