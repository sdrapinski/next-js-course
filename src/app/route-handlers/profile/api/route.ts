import { headers } from "next/headers";
import { type NextRequest } from "next/server"



export async function GET(req: NextRequest) {
    const requestHeders = new Headers(req.headers)
    const headerList =await  headers()

    console.log(requestHeders.get("Authorization"));
    console.log(headerList.get("Authorization"));
    
    return new Response("profile data")
}