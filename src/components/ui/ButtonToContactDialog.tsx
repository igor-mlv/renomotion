import { Button } from "@/components/ui/button"
export default function ButtonToContactDialog({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <Button
            variant="ghost"
            className={`w-[150px] rounded-[20px] border-solid border-[1px] border-black hover:bg-inherit ${className}`}>
            <span className="btnText hover:text-gold">{children}</span>
        </Button>
    )
}