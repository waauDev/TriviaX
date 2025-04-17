import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () =>{
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2
        border-slate-200 p-2">
        <div className="max-w-screen-lg mx-auto flex items-center
            justify-evenly h-full">
                
                <Button size="lg" variant="ghost">
                    <Image
                    src="/es.svg"
                    alt="Español"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Español
                </Button>
                <Button size="lg" variant="ghost">
                    <Image
                    src="/it.svg"
                    alt="Italiano"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Italiano
                </Button>
                <Button size="lg" variant="ghost">
                    <Image
                    src="hr.svg"
                    alt="Croata"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Croata
                </Button>
                <Button size="lg" variant="ghost">
                    <Image
                    src="/fr.svg"
                    alt="Frances"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Frances
                </Button>
                <Button size="lg" variant="ghost" className="max-w-fit"
                    >
                    <Image
                    src="/jp.svg"
                    alt="Japanese"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Japanese
                </Button>

            </div>
        </footer> 
    )
}

export default Footer;