import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserProgress, getUserSubscription } from "@/db/query";
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import Image from "next/image";
import { Items } from "./items";
import { QuestsExtended } from "@/components/ui/questsExtended";

const ShopPage = async () =>{
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
                <QuestsExtended points={userProgress.points}/>
            </StickyWrapper>
            <FeedWrapper>
                <div className="w-full flex flex-col items-center">
                    <Image
                        src={"/shop.svg"}
                        alt={"Shop"}
                        height={90}
                        width={90}
                    />

                </div>
                <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
                    Tienda
                </h1>
                <p className="text-muted-foreground text-center text-lg mb-6">
                    Puedes gastar tus puntos en cosas nuevas!
                </p>
                
                <Items
                    hearts={userProgress.hearts}
                    points={userProgress.points}
                    hasActiveSubscription={isPro}
                />
                    

            </FeedWrapper>
        </div>
    )
}


export default ShopPage;