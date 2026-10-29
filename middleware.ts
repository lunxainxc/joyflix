import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const cookiePwd = req.cookies.get('site_pwd')?.value
  const realPwd = process.env.PASSWORD

  if (!realPwd || cookiePwd !== realPwd) {
    return NextResponse.redirect(new URL('/password', req.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/((?!password).*)',
}
