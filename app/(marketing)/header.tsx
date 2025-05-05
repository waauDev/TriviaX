import Image from "next/image";
import { Loader } from "lucide-react";
import{
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
} from "@clerk/nextjs"
import { Button } from "@/components/ui/button";

export const Header = () =>{
    return(
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg max-auto flex items-center justify-between h-full ">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/think.svg" height={75} width={75} alt="mascot"></Image>
                    <h1 className="text-2xl font-extrabold text-indigo-500 tracking-wide">
                        TriviaX
                    </h1>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin"></Loader>
                </ClerkLoading>

                <ClerkLoaded>
                    <SignedIn>
                        <UserButton
                         afterSignOutUrl="/" 
                        />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal"
                            forceRedirectUrl="/learn"
                            signUpForceRedirectUrl ="/learn"
                        >
                        <Button size="lg" variant="ghost">Login</Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>

            </div>
        </header>
    )
}

export default Header;