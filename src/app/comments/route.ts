import { type NextRequest } from "next/server";
import { comments } from "./data"

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("query")
    const filteredcomments = query ? comments.filter((comment)=>comment.text.includes(query)) : comments
    return Response.json(filteredcomments)
}

export async function POST(req:Request) {
    const comment = await req.json();
    const newComment = {
        id:comments.length +1,
        text: comment.text
    }
    comments.push(newComment)
    return Response.json(JSON.stringify(newComment),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    })
}