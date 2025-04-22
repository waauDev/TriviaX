"use client"

import Link from "next/link"
import { Button } from "./button"
import { quests } from "@/const";
import Image from "next/image";
import { Progress } from "./progress";

type Props ={
    points:number;
}

export const QuestsExtended =({points}:Props)=>{
    return(
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between space-y-2" >
                <h3 className="font-bold text-lg">
                Mira tu progreso
                </h3>
                <Link href="/quests"
                >
                    <Button size="sm"
                    variant="primaryOutline">
                        Ver
                    </Button>
                </Link>
                
            </div>
            <ul className="w-full space-y-4">
                                {quests.map((quest)=>{
                                    const progress = (points/quest.value)*100;
                                    return(
                                        <div className="flex items-center w-full pb-4 gap-x-3"
                                        key={quest.title}>
                                            <Image 
                                                src="/points.svg"
                                                alt="points"
                                                width={40}
                                                height={40}
                                            />
                                            <div className="flex flex-col gap-y-2 w-full">
                                                <p className="text-neutral-700 text-sm font-bold">
                                                    {quest.title}
                                                </p>
                                                <Progress value={progress} className="h-3"/>
                                            </div>
            
                                        </div>
                                    )
                                })}
                            </ul>
                
        </div>
    )
}