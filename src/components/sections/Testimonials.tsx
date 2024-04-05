import { testimonialsSectionCards as cards } from "@/constants"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from 'next/image';

export default function Testimonials() {
    return (
        <section id="testimonials" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <h2 className=" text-center mb-1">Real Experiences & Real Stories</h2>
                <div className="bg-gold w-[300px] h-[4px] mx-auto"></div>

                <div className="flex md:flex-row flex-col justify-around md:items-start items-center mt-[70px] px-2 shadow-ring">
                    {cards.map((card: { id: number, name: string, rewiev: string, date: string, imgUrl: string }) => (
                        <ScrollArea key={card.id} className="w-[400px] md:h-[410px] h-[460px] bg-neutral-50/60 shadow-lg md:mb-0 mb-[100px] ">
                            <div className={`${card.id === cards.length && 'md:animate-bounce'} hover:animate-none`}>
                                <div className="p-[20px] flex ">
                                    <Avatar>
                                        <AvatarImage src={card.imgUrl} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <h5 className="pl-[10px]">{card.name}</h5>
                                </div>
                                <div className="flex px-[20px] justify-between ">
                                    <div className="flex">
                                        {Array(5).fill(null).map((_, index) => (

                                            <Image
                                                key={index}
                                                src="/assets/star.svg"
                                                alt="Star"
                                                width={25}
                                                height={50}
                                            />
                                        ))}
                                    </div>
                                    <p className=" opacity-30">{card.date}</p>
                                </div>
                                <div className="px-[20px] pt-[10px] pb-[20px]">
                                    <p className="text-ellipsis overflow-hidden">{card.rewiev}</p>
                                </div>
                            </div>
                        </ScrollArea>
                    ))}
                </div>
            </div>
        </section>
    )
}