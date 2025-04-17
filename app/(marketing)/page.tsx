import { Button } from "@/components/ui/button"
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import {  Loader } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home(){
  return(
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">

      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero"/>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">Aprende, practica y divierte</h1>
      <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader className="h-5 w5 text-muted-foreground animate-spin"></Loader>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton mode="modal"
                  forceRedirectUrl="/learn"
                  signInForceRedirectUrl ="/learn"
            >
              <Button size="lg" variant="secondary" className="w-full">Registrate</Button>

            </SignUpButton>
            <SignInButton mode="modal"
                  forceRedirectUrl="/learn"
                  signUpForceRedirectUrl ="/learn"
            >
              <Button size="lg" variant="primaryOutline" className="w-full">Ya tengo una cuenta</Button>

            </SignInButton>

          </SignedOut>
          <SignedIn>
            <Button size="lg" variant="secondary" className="w-full" asChild>
              <Link href="/learn">
                Continua Jugando
              </Link>
            </Button>
          </SignedIn>
        </ClerkLoaded>
      </div>
      </div>
    </div>
  )
}
