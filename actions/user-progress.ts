"use server";
import { redirect } from "next/navigation";
import{auth, currentUser} from "@clerk/nextjs/server";
import { getCourseById, getUserProgress } from "@/db/query";
import { userProgress } from "@/db/schema";
import db from "@/db/drizzle";
import { revalidatePath } from "next/cache";




export const upsertUserProgress = async(courseId:number)=>{
    const {userId} = await auth();
    const user = await currentUser();

    if(!userId || !user){
        console.log("Error: Usuario no autenticado");
        throw new Error("Unauthorized");
        
    }

    const course = await getCourseById(courseId);
    
    if(!course){
        console.log("Curso No encontrado");
        throw new Error("Contenido No encontrado");
        
    }


    // if(!course.units.length || !course.units[0].lessons.length){
    //     throw new Error("Contenido vacio");
    // }

    const existingUserProgress = await getUserProgress();

    if(existingUserProgress){
        await db.update(userProgress).set({
            activeCourseId:courseId,
            userName:user.firstName || "User",
            userImageSrc: user.imageUrl || "/mascot.svg"
        })

        revalidatePath("/courses");
        revalidatePath("/learn");
    
        redirect("/learn");
    }
    await db.insert(userProgress).values({
        userId,
        activeCourseId:courseId,
        userName:user.firstName|| "User",
        userImageSrc: user.imageUrl|| "/mascot.svg"  
    })
    

    revalidatePath("/courses");
    revalidatePath("/learn");

    redirect("/learn");
}