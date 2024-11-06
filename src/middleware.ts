import { NextResponse,type NextRequest } from "next/server";

export function middleware(request:NextRequest) {
    if(request.nextUrl.pathname === "/profile"){
    return NextResponse.redirect(new URL("/blog",request.url))
    }
}

// export const config = {
//     matcher: "/profile"
// }
