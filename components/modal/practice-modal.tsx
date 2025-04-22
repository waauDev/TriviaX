"use client"

import  Image  from "next/image"

import {Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle

} from "@/components/ui/dialog"

import { Button } from "../ui/button"
import { usePracticeModal } from "@/store/use-practice-modal"
import { useRouter } from "next/navigation"
import { use, useEffect, useState } from "react"


export const PracticeModal=()=>{
    const router = useRouter();
    const [isClient, setIsClient] =useState(false);
    const {isOpen, close} = usePracticeModal(); 

    useEffect(()=> setIsClient(true),[]);

  

    if(!isClient){
        return null;
    }

    return(
        <Dialog open={isOpen} onOpenChange={close}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                <div className="flex items-center w-full justify-center mb-5">
                <Image
                src="/heart.svg"
                alt="heart"
                height={100}
                width={100}
                />
                </div>
                <DialogTitle className="text-center font-bold text-2xl">
                    Practicar
                </DialogTitle>
                <DialogDescription className="text-center text-base">
                    Practica nuevamente para ganar Vidas y puntos. No puedes perder vidas en modo Practica
                </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mb-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <Button
                            variant="primary"
                            className="w-full"
                            size="lg"
                            onClick={close}
                        >
                            Iniciar
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>  
        </Dialog>
    );
}