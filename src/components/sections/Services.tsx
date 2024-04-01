import { servicesSectionCards as cards } from "@/constants"

export default function Services() {
    return (
        <section id="services" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <h2 className=" text-center mb-1">Services We Offer</h2>
                <div className="bg-gold w-[200px] h-[4px] mx-auto"></div>

                <div className="flex md:flex-row flex-col justify-between md:items-start items-center mt-[50px] md:h-[650px] h-[2300px]">
                    {cards.map((card: { id: number, heading: string, description: string, imgUrl: string }) => (
                        <div key={card.id} className="flex flex-col items-center pb-[50px]">
                            <img
                                src={card.imgUrl}
                                className="w-[350px] h-[400px] object-cover rounded-[40px]"
                                alt="Bathroom Renovations"
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