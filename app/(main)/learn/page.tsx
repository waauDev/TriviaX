import {redirect} from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { getCourseProgress, getlessonPercentage, getUnits, getUserProgress } from "@/db/query";
import { Unit } from "./unit";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/ui/quests";
import { Manual } from "@/components/ui/manual";




const LearnPage = async() => {

  const userProgressData= getUserProgress();
  const unitsData= getUnits();

  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getlessonPercentage();
  
  
  

  const[
    userProgress,
    units,
    courseProgress,
    lessonPercentage,

  ]= await Promise.all(
    [
      userProgressData,unitsData,  courseProgressData, lessonPercentageData,
    ])
  
  
  if(!userProgress|| !userProgress.activeCourse){
    redirect("/courses");
  }

  if(!courseProgress){
    redirect("/courses");
  }

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6"
    >
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress?.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}>

        </UserProgress>
        <Promo />
        <Quests/>
        <Manual/>
      </StickyWrapper>
      <FeedWrapper>
          <Header title={userProgress?.activeCourse?.title}/>
          {units.map((unit)=>(
            <div key={unit.id} className="mb-10">
               
              <Unit 
                id={unit.id}
                order={unit.order}
                description={unit.description}
                title={unit.title}
                lessons={unit.lessons}
                activeLesson={courseProgress.activeLesson}
                activeLessonPercentage={lessonPercentage}
              />
            </div>
          ))}
      </FeedWrapper>
    </div>
  )
}


export default LearnPage;