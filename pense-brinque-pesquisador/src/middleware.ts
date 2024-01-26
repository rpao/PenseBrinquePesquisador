import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { loginHref } from './app/login/page';
import { homeHref } from './app/home/page';
import authenticationServer from './app/authentication/authenticationServer';

export function middleware(request: NextRequest) {
  try {
    const authenticatedUser = authenticationServer.verifyUserToken(request);
    console.log('[middleware] authenticatedUser:', authenticatedUser);
    const newURL: URL = new URL(
      authenticatedUser ? homeHref : loginHref,
      request.url,
    );
    console.log('[middleware] redirecting to :', newURL);
    return NextResponse.redirect(newURL);
  } catch (error) {
    console.log(error);
    if (!request.url.includes(loginHref)) {
      const newURL: URL = new URL(loginHref, request.url);
      console.log('[middleware] redirecting to :', newURL);
      return NextResponse.redirect(newURL);
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
