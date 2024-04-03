import { gallerySectionCards as cards } from "@/constants"
import Image from "next/image"
export default function Gallery() {

    return (
        <section id="gallery" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <h2 className=" text-center mb-1">Our Portfolio: Visual Journey</h2>
                <div className="bg-gold w-[200px] h-[4px] mx-auto"></div>

                <div className="flex justify-center items-center">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mt-[60px]">
                        {cards.map((card: { id: number, title: string, imgUrl: string, skeletonImgUrl: string }) => (
                            <div key={card.id} className="w-[300px] h-[400px] relative">
                                {/* When use fill prop it changes position to absolut! */}
                                <Image
                                    src={card.imgUrl}
                                    alt={card.title}
                                    fill
                                    className="rounded-[30px] object-cover object-center"
                                    placeholder="blur"
                                    blurDataURL={card.skeletonImgUrl}
                                />
                                <div className="md:block hidden absolute inset-0 bg-black opacity-40 hover:opacity-0 transition-opacity duration-200 rounded-[30px]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}