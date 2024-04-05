import { pricesSectionCards as cards } from "@/constants"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Button from "@/components/ui/ButtonToContactDialog"
import Image from 'next/image'

export default function Prices() {
    return (
        <section id="prices" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <h2 className=" text-center mb-1">Our Prices</h2>
                <div className="bg-gold w-[200px] h-[4px] mx-auto"></div>

                <Accordion type="single" collapsible className="md:mt-0 mt-[20px]">
                    {cards.map((card: { id: number, triggerText: string, heading: string, bulletList: string[], note: string, price: string, btnText: string, imgUrl: string, skeletonImgUrl: string }) => (
                        <AccordionItem key={card.id} value={card.triggerText} className="border-b-2 border-black">
                            <AccordionTrigger><h4>{card.triggerText}</h4></AccordionTrigger>
                            <AccordionContent>
                                <div className="flex md:flex-row flex-col justify-between md:items-start items-center">
                                    <Image
                                        src={card.imgUrl}
                                        alt={card.heading}
                                        width={600}
                                        height={600}
                                        className="rounded-[60px]"
                                        placeholder="blur"
                                        blurDataURL={card.skeletonImgUrl}
                                    />

                                    <div className="flex flex-col w-auto max-w-[600px] justify-start pt-[20px] px-[20px]">
                                        <h3 className="md:text-left text-center">{card.heading}</h3>
                                        <ul className="list-disc py-[40px]">
                                            {card.bulletList.map((item: string, i: number) => (
                                                <li key={i}><p>{item}</p></li>
                                            ))}
                                        </ul>
                                        <p className="border-solid border-gold border-[1px] md:px-[10px] px-[5px] py-[20px] md:text-left text-center">{card.note}</p>
                                        <div className="flex md:flex-row flex-col justify-around items-center mt-[40px]">
                                            <p>{card.price}</p>
                                            <Button className="md:my-0 my-[20px]">{card.btnText}</Button>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}