import { NextResponse } from "next/server";

export function middleware(req) {
  const password = process.env.NEXT_PUBLIC_AUTH_PASSWORD; // Get password from environment
  const cookies = req.cookies.get("auth");

  if (cookies?.value === password) {
    return NextResponse.next(); // Allow access
  }

  // Redirect to password input page
  return NextResponse.redirect(new URL("/password", req.url));
}

// Apply middleware to protected routes
export const config = {
  matcher: ["/manageProjects", "/editproject/:path*"], // ✅ Correct pattern
};
