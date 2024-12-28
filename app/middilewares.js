import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('adminToken');

  if (!token) {
    return new Response('Unauthorized', { status: 401 });
  }

  return NextResponse.next();
}

  