import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware (request: NextRequest) {
    const token = request.cookies.get('sessionToken');

    if (!token) {
        return NextResponse.redirect(new URL('/unauthenticated', request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: ['/planets', '/starships', '/vehicles', '/people', '/films', '/species'],
};
