"use client";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import Form from "@/components/ui/ContactUsForm"

export default function ButtonToContactDialog({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <Dialog>
            <DialogTrigger
                className={`w-[150px] rounded-[20px] border-solid border-[1px] border-black hover:bg-inherit h-[40px] ${className}`}
            >
                <span className="btnText hover:text-gold">{children}</span>
            </DialogTrigger>
            <DialogContent className="flex justify-center items-start md:w-[70%] w-full max-w-[900px]  bg-root-pattern rounded-[0px] py-[70px]">
                <Form />
            </DialogContent>
        </Dialog>

    )
}