import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/query";

import { redirect } from "next/navigation";
import Image from "next/image";

import { Separator } from "@/components/ui/separator";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Progress } from "@/components/ui/progress";
import {quests} from "@/const";




const questPage = async () =>{
    const userProgressData = getUserProgress();
    const userSubscriptionData = getUserSubscription();
    

    const [userProgress, userSubscription] = await Promise.all([
        userProgressData,userSubscriptionData]
    );

    if(!userProgress || !userProgress.activeCourse){
        redirect ("/courses");
    }
    const isPro= !!userSubscription?.isActive
    return(
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper> 
                <UserProgress
                    activeCourse={userProgress.activeCourse}
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={isPro}
                />
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image
                        src={"/quests.svg"}
                        alt={"quest"}
                        height={90}
                        width={90}
                    />

                </div>
                <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                Progreso Misiones
                </h1>
                <p className="text-muted-foreground text-center text-lg mb-6">
                    Cada vez que completas una mision ganas puntos
                </p>
                <ul className="w-full">
                    {quests.map((quest)=>{
                        const progress = (userProgress.points/quest.value)*100;
                        return(
                            <div className="flex items-center w-full p-4 gap-x-4 border-t-2"
                            key={quest.title}>
                                <Image 
                                    src="/points.svg"
                                    alt="points"
                                    width={60}
                                    height={60}
                                />
                                <div className="flex flex-col gap-y-2 w-full">
                                    <p className="text-neutral-700 text-xl font-bold">
                                        {quest.title}
                                    </p>
                                    <Progress value={progress} className="h-3"/>
                                </div>

                            </div>
                        )
                    })}
                </ul>
                
                    

            </FeedWrapper>
        </div>
    )
}


export default questPage;