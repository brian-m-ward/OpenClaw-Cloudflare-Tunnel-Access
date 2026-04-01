/*
Originally Created to pass headers through Cloudflare Tunnel to OpenClaw as an alternative to pairing requests
*/
// ---- Last Update 2026.04.01 ----

export default {
  async fetch(request) {
    const email = request.headers.get("cf-access-authenticated-user-email");
    const forwarded = new Request(request);

    if (email) {
      forwarded.headers.set("x-forwarded-user", email);
    }

    return fetch(forwarded);
  },
};
