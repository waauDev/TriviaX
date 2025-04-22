"use client"

import Link from "next/link"
import { Button } from "./button"

type Props ={
    points:number;
}

export const Quests =()=>{
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
                
        </div>
    )
}