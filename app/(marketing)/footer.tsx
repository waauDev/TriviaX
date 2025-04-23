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
                    src="/ciencia.gif"
                    alt="Ciencia"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Ciencia
                </Button>
                <Button size="lg" variant="ghost">
                    <Image
                    src="/histo.gif"
                    alt="Historia"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Historia
                </Button>
                <Button size="lg" variant="ghost">
                    <Image
                    src="/geogra.gif"
                    alt="geografia"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"
                    />
                    Geografía
                </Button>
            </div>
        </footer> 
    )
}

export default Footer;