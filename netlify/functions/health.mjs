export default async () => {
  return new Response(JSON.stringify({status:"ok", service:"portfolio", owner:"Muhammad Saad Jadoon"}), {
    status: 200,
    headers: {"content-type":"application/json; charset=utf-8", "cache-control":"no-store"}
  });
};
