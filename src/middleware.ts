// // src/middleware.ts
// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// import { NextResponse } from 'next/server';

// const isPublicRoute = createRouteMatcher([
//   '/', '/menu', '/about', '/contact',
//   '/sign-in', '/sign-up',
//   '/api/(.*)', '/favicon.ico',
// ]);

// export default clerkMiddleware(async (auth, req) => {
//   const { userId } = await auth();
//   const url = req.nextUrl;

//   // 🔐 Only allow specific users to access Sanity Studio
//   if (url.pathname.startsWith('/studio')) {
//     const allowedAdmins = ['user_abc123', 'user_xyz456']; // Replace with your real user IDs

//     if (!userId) {
//       return NextResponse.redirect(new URL('/sign-in', req.url));
//     }

//     if (!allowedAdmins.includes(userId)) {
//       return new Response('⛔ Access Denied: You are not allowed to access Studio.', { status: 403 });
//     }
//   }

//   // ✅ Allow all public routes without login
//   if (isPublicRoute(req)) {
//     return;
//   }

//   // 🔐 For all other routes: require login
//   if (!userId) {
//     return NextResponse.redirect(new URL('/sign-in', req.url));
//   }
// });

// export const config = {
//   matcher: [
//     '/((?!_next|.*\\..*).*)', // matches all routes except static files and _next
//     '/(api|trpc)(.*)',
//     '/studio(.*)', // ensure Sanity Studio routes are included
//   ],
// };


// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/', '/menu', '/about', '/contact',
  '/sign-in', '/sign-up',
  '/api/(.*)', '/favicon.ico',
  '/studio(.*)', // 👈 Make studio public
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const url = req.nextUrl;

  // ✅ Allow all public routes without login (including /studio)
  if (isPublicRoute(req)) {
    return;
  }

  // 🔐 For all other routes: require login
  if (!userId) {
    return NextResponse.redirect(new URL('/sign-in', req.url));
  }
});

export const config = {
  matcher: [
    '/((?!_next|.*\\..*).*)',
    '/(api|trpc)(.*)',
    '/studio(.*)', // 👈 Ensure it's matched
  ],
};
