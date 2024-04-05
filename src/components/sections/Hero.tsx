import * as React from "react"
import Image from "next/image"
import { heroSectionCards } from "@/constants"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Button from "@/components/ui/ButtonToContactDialog"

export default function Hero() {
    return (
        <section id="hero" className=" flex justify-center items-center md:h-[80vh] h-[70vh] max-h-[650px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <Carousel>
                    <CarouselContent>
                        {heroSectionCards.map((card: { id: number, heading: string, btnText: string, imgUrl: string, skeletonImgUrl: string }) => (
                            <CarouselItem key={card.id}>
                                <div className="flex md:flex-row flex-col-reverse justify-between items-center min-h-[450px]">
                                    <div className="flex flex-col justify-around h-[200px] md:items-start items-center">
                                        <h1>{card.heading}</h1>
                                        <Button>{card.btnText}</Button>
                                    </div>
                                    <Image
                                        src={card.imgUrl}
                                        width={1200}
                                        height={700}
                                        className="rounded-[40px] md:max-w-[100%] max-w-[50%] min-w-[370px]  max-h-[500px]"
                                        alt={card.heading}
                                        placeholder="blur"
                                        blurDataURL={card.skeletonImgUrl}
                                    />

                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-between items-center md:w-[15rem] w-full">
                        <CarouselPrevious variant="link" className="h-10 w-[75px] rounded-full static" >
                            <Image
                                src="/assets/arrow-left.svg"
                                alt="Arrow Left"
                                width={75}
                                height={50}
                                className="h-auto"
                            />
                        </CarouselPrevious>
                        <CarouselNext variant="link" className="h-10 w-[75px] rounded-full static">
                            <Image
                                src="/assets/arrow-right.svg"
                                alt="Arrow Right"
                                width={75}
                                height={50}
                            />
                        </CarouselNext>
                    </div>
                </Carousel>
            </div>
        </section>



    )
}