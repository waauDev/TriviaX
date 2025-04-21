"use server";
import { redirect } from "next/navigation";
import{auth, currentUser} from "@clerk/nextjs/server";
import { getCourseById, getUserProgress } from "@/db/query";
import { challengeProgress, challenges, userProgress } from "@/db/schema";
import db from "@/db/drizzle";
import { revalidatePath } from "next/cache";
import { error } from "console";
import { and, eq } from "drizzle-orm";




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

export const reduceHearts = async(challengeId:number)=>{
    const {userId} = await auth();

    if(!userId){
        throw new Error("Unauthorized");
    }

    const currentUserProgress = await getUserProgress();

    const challenge = await db.query.challenges.findFirst({
        where:eq(challenges.id, challengeId)
    })
    
    if(!challenge){
        throw new Error("Challenge no encontrado")
    }
    const lessonId = challenge.lessonId;

    const existingChallengeProgress = await db.query.challengeProgress.findFirst({
        where: and(
            eq(challengeProgress.userId, userId),
            eq(challengeProgress.challengeId, challengeId),
        )
    });

    const isPractice = !!existingChallengeProgress;

    if(isPractice){
        return{error:"Estamos en practica"}
    }

    if(!currentUserProgress){
        throw new Error("User progress no encontrado")
    }

    if(currentUserProgress.hearts === 0){
        return {error:"hearts"}
    }

    await db.update(userProgress).set({
        hearts:Math.max(currentUserProgress.hearts -1 , 0),
    }).where(eq(userProgress.userId, userId));

    revalidatePath("/shop");
    revalidatePath("/learn");
    revalidatePath("/quests");
    revalidatePath("/leaderboard");
    revalidatePath(`/lesson/${lessonId}`);
}