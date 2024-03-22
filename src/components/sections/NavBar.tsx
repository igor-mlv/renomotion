
import { navbarLinks } from "@/constants";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"



export default function NavBar() {
    return (
        <nav className="h-[70px]">
            <div className="flex justify-center items-center mt-[3rem]">
                <div className=" fixed lg:max-w-[1280px] w-full">
                    <div className="flex justify-between items-center py-4 px-6">
                        <div>
                            <img
                                src="/assets/logo.svg"
                                alt="Logo"
                                className="h-auto min-w-[300px]"
                            />
                        </div>

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
                                    <img
                                        src="/assets/hamburger.svg"
                                        alt="Logo"
                                        className="h-auto min-w-[72px]"
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