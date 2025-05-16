"use client"

import Link from "next/link"
import { Button } from "./button"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Props ={
    points:number;
}

export const Manual =()=>{
    return(
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between space-y-2" >
                <h3 className="font-bold text-lg">
                Manual Detallado
                </h3>
                <Link href="https://drive.google.com/file/d/18E7SrYahuTChBN6vQj-je1XldMJ2Hjv3/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer">
                
                <Button size="sm" variant="primaryOutline">
                Ver
                </Button>
  
                </Link>
                
            </div>
                
        </div>
    )
}