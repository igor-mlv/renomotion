import { gallerySectionCards as cards } from "@/constants"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
} from "@/components/ui/carousel"


export default function Gallery() {

    return (
        <section id="gallery" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <h2 className=" text-center mb-1">Our Portfolio: Visual Journey</h2>
                <div className="bg-gold w-[200px] h-[4px] mx-auto"></div>

                {/* For laptop version */}
                <div className="md:flex hidden justify-center items-center">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mt-[60px]">
                        {cards.map((card: { id: number, title: string, imgUrl: string, skeletonImgUrl: string }) => (
                            <Dialog key={card.id}>
                                <DialogTrigger>
                                    <div key={card.id} className="w-[300px] h-[400px] relative">
                                        {/* When use fill prop it changes position to absolut! */}
                                        <Image
                                            src={card.imgUrl}
                                            alt={card.title}
                                            fill
                                            sizes="(min-width: 500px)"
                                            className="rounded-[30px] object-cover object-center"
                                            placeholder="blur"
                                            blurDataURL={card.skeletonImgUrl}
                                        />
                                        <div className="md:block hidden absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-opacity duration-200 rounded-[30px]"></div>
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="flex justify-center items-start w-[70%] max-w-[900px]  bg-root-pattern rounded-[0px]">
                                    <div key={card.id} className="w-[500px] h-[80vh] max-h-[800px] relative">
                                        {/* When use fill prop it changes position to absolut! */}
                                        <Image
                                            src={card.imgUrl}
                                            alt={card.title}
                                            fill
                                            sizes="(min-width: 500px)"
                                            className="rounded-[30px] object-cover object-center"
                                            placeholder="blur"
                                            blurDataURL={card.skeletonImgUrl}
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        ))}
                    </div>
                </div>

                {/* For mobile version */}
                <div className="md:hidden flex justify-center items-center mt-[50px]">
                    <Carousel orientation="vertical" className="w-full max-w-xs">
                        <CarouselContent className="max-h-[550px]">
                            {cards.map((card: { id: number, title: string, imgUrl: string, skeletonImgUrl: string }) => (
                                <CarouselItem key={card.id} className="py-[30px]">
                                    <div className="w-full h-[500px] relative">
                                        {/* When use fill prop it changes position to absolut! */}
                                        <Image
                                            src={card.imgUrl}
                                            alt={card.title}
                                            fill
                                            sizes="(min-width: 200px)"
                                            className="rounded-[30px] object-cover object-center"
                                            placeholder="blur"
                                            blurDataURL={card.skeletonImgUrl}
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext variant="link" className="h-10 w-[75px] rounded-full rotate-0 pt-[100px]">
                            <img src="/assets/arrow-down.svg" className="animate-bounce" alt="Arrow Down" />
                        </CarouselNext>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}