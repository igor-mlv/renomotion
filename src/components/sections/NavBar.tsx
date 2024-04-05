
import { navbarLinks } from "@/constants";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image';



export default function NavBar() {
    return (
        <nav className="h-[70px]">
            <div className="flex justify-center items-center mt-[35px]">
                <div className=" fixed lg:max-w-[1280px] w-full bg-root-pattern z-10">
                    <div className="flex justify-between items-center py-4 px-6">
                        <Image
                            src="/assets/logo.svg"
                            alt="logo"
                            width={300}
                            height={100}
                            className="h-auto"
                        />

                        <ul className="hidden md:flex items-center space-x-6">
                            {navbarLinks.map((link: { id: string, title: string, }, index) => (
                                <li key={`${link.id}`} className="flex justify-center items-center">
                                    <Button variant="link" className={`navbarLink ${index === navbarLinks.length - 1 ? 'mr-0' : 'mr-1'}`}>
                                        <a href={`#${link.id}`}>
                                            {link.title}
                                        </a>
                                    </Button>
                                </li>
                            ))}
                        </ul>

                        <div className="md:hidden flex flex-1 justify-end items-center">
                            <Sheet>
                                <SheetTrigger>
                                    <Image
                                        src="/assets/hamburger.svg"
                                        alt="hamburger menu"
                                        width={72}
                                        height={50}
                                        sizes="(min-width: 72px)"
                                        className="h-auto"
                                    />
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetClose asChild>
                                            <ul className="flex flex-col items-center">
                                                {navbarLinks.map((link: { id: string, title: string }) => (
                                                    <li key={`${link.id}`} className="flex justify-center items-center mb-2">
                                                        <Button variant="link" className="navbarLink">
                                                            <a href={`#${link.id}`}>
                                                                {link.title}
                                                            </a>
                                                        </Button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </SheetClose>
                                    </SheetHeader>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}