import db from "@/db/drizzle"
import { courses } from "@/db/schema"
import { isAdmin } from "@/lib/admin"
import { eq } from "drizzle-orm"
import { NextScript } from "next/document"
import { NextResponse } from "next/server"

export const GET = async(req:Request, {params}:{params:{courseId:number}})=>{

    if(!isAdmin()){
        return new NextResponse("Unauthorized",{status:403})
    }
    const data = await db.query.courses.findFirst({
        where:eq(courses.id, params.courseId)
    })

    return NextResponse.json(data);
}