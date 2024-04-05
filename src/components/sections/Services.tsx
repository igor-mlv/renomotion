import { servicesSectionCards as cards } from "@/constants"
import Image from "next/image"
export default function Services() {
    return (
        <section id="services" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <h2 className=" text-center mb-1">Services We Offer</h2>
                <div className="bg-gold w-[200px] h-[4px] mx-auto"></div>

                <div className="flex md:flex-row flex-col justify-between md:items-start items-center mt-[50px] ">
                    {cards.map((card: { id: number, heading: string, description: string, imgUrl: string }) => (
                        <div key={card.id} className="flex flex-col items-center pb-[100px]">

                            <Image
                                src={card.imgUrl}
                                alt="hamburger menu"
                                width={350}
                                height={450}
                                className="object-cover rounded-[40px] h-[450px]"
                            />

                            <div className="mt-[30px] w-auto max-w-[350px]">
                                <h3>{card.heading}</h3>
                                <p className="text-center mt-[20px]">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}