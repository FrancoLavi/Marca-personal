import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "es"] as const;
const defaultLocale = "en";

function getPreferredLocale(request: NextRequest) {
  const savedLocale = request.cookies.get("site-locale")?.value;
  if (savedLocale && locales.includes(savedLocale as (typeof locales)[number])) return savedLocale;

  const browserLocale = request.headers.get("accept-language")?.split(",")[0]?.split("-")[0];
  return browserLocale === "es" ? "es" : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".")) return NextResponse.next();

  const hasLocale = locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (hasLocale) {
    const locale = pathname.split("/")[1];
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-site-locale", locale);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set("site-locale", locale, { maxAge: 60 * 60 * 24 * 365, path: "/" });
  return response;
}

export const config = { matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"] };
