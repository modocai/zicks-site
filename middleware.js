// Vercel Routing Middleware: 한국에서 루트(/)로 처음 들어온 사람만 /kr/ 로 보낸다 (HANDOFF 2.5).
// 시장 전환 링크를 누르면 zicks_market 쿠키가 생기고, 그 뒤로는 보내지 않는다 (src/layouts/Base.astro).
// 브라우저 언어로는 보내지 않는다. 다른 경로는 건드리지 않는다.
export const config = { matcher: '/' };

export default function middleware(request) {
  const cookie = request.headers.get('cookie') || '';
  const chosen = /(?:^|;\s*)zicks_market=/.test(cookie);
  if (!chosen && request.headers.get('x-vercel-ip-country') === 'KR') {
    return Response.redirect(new URL('/kr/', request.url), 302);
  }
  // 아무것도 돌려주지 않으면 정적 페이지로 그대로 이어진다.
}
