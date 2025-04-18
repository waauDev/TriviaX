"use client";

import { challengeOptions, challenges } from "@/db/schema";
import { headers } from "next/headers";
import { useState } from "react";
import { Header } from "./header";
import { QuestionBubble } from "./question-bubble";

type Props ={
    initialPercentage:number;
    initialHearts:number;
    initialLessonId:number;
    initialLessonChallenges:( typeof challenges.$inferSelect & {
        completed:boolean;
        challengeOptions: typeof challengeOptions.$inferSelect[];
    })[];
    userSubscription:any;
}

export const Quiz = ({
    initialPercentage,
    initialHearts,
    initialLessonId,
    initialLessonChallenges,
    userSubscription

}:Props)=>{

    const[hearts, setHearts] =useState(initialHearts);
    const [percentage,setPercentage] = useState(initialPercentage)

    const[challenges]=useState(initialLessonChallenges);
    const[activeIndex, setActivaIndex] = useState(()=>{
        const uncompletedIndex = challenges.findIndex((challenge)=> !challenge.completed)
        return uncompletedIndex ===-1 ? 0 : uncompletedIndex;
    });

    const challenge =challenges[activeIndex];
    const options = challenge?.challengeOptions ?? [];

    const title= challenge.type ==="ASSIST"
    ? "Escoge la respuesta correcta"
    : challenge.question

    return(
        <>
        <Header
            hearts={hearts}
            percentage={percentage}
            hasActiveSubscription={!!userSubscription?.isActive}
        />
        <div className="flex-1">
            <div className="h-full flex items-center justify-center">
                <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
                    <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
                        {title}
                    </h1>
                    <div>
                        {challenge.type ==="ASSIST" && (
                            <QuestionBubble question={challenge.question}>

                            </QuestionBubble>
                        )}

                        <Challengue>
                            options={options}
                            onSelect={()=>{}}
                            status="correct"
                            selectedOption ={null}
                            disabled={false}
                            type={challenge.type}
                        </Challengue>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}