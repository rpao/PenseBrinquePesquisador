import { NextResponse, type NextRequest } from 'next/server';
import { loginHref } from './app/login/page';
import routerHandler from './app/router/routerHandler';
import { homeHref } from './app/home/page';
import { Cookies } from './cookieKeys';

export function middleware(request: NextRequest) {
  try {
    const isLoginPage = request.nextUrl.pathname.includes(loginHref);
    const authenticatedUser = request.cookies.get(Cookies.userTokenKey)?.value;    
    if (authenticatedUser) {
      return isLoginPage
        ? routerHandler.redirect(homeHref)
        : NextResponse.next();
    }

    return isLoginPage
      ? NextResponse.next()
      : routerHandler.redirect(loginHref);

  } catch (error) {
    console.log('[MIDDLEWARE ERROR]', error);
  }
}

export const config = {
  matcher: ['/', '/login', '/home', '/home/:path'],
};
