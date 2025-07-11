// src/middleware.ts
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const { pathname } = req.nextUrl;

  // 👇 List of public routes (can access without login)
  const publicRoutes = [
    "/",
    "/about",
    "/contact",
    "/sign-in",
    "/sign-up",
  ];

  // ✅ Allow access if the path is in publicRoutes or starts with these
  const isPublic =
    publicRoutes.includes(pathname) ||
    pathname.startsWith("/menu") ||      // dynamic card routes
    pathname.startsWith("/card") ||
    pathname.startsWith("/studio") ||    // sanity studio
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico";

  if (isPublic) {
    return NextResponse.next(); // ✔ allow
  }

  // 🔐 Force login only for private pages (like /dashboard etc.)
  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }
});


export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
    "/studio(.*)",
  ],
};
