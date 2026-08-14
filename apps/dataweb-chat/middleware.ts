import { NextResponse, type NextRequest } from "next/server";

/**
 * Middleware de segurança — adiciona headers obrigatórios conforme skill seguranca-api.
 * Aplica-se a todas as rotas exceto assets estáticos do Next.js.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Headers de segurança obrigatórios (skill seguranca-api)
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=()");
  response.headers.set("X-DNS-Prefetch-Control", "on");

  // CORS para rotas de API — restritivo (apenas mesma origem por padrão)
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const origin = request.headers.get("origin") ?? "";
    const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") ?? [];
    const isAllowed =
      allowedOrigins.length === 0 ||
      allowedOrigins.includes(origin) ||
      process.env.NODE_ENV === "development";

    if (isAllowed && origin) {
      response.headers.set("Access-Control-Allow-Origin", origin);
    }
    response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );

    // Preflight
    if (request.method === "OPTIONS") {
      return new NextResponse(null, { status: 204, headers: response.headers });
    }
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
