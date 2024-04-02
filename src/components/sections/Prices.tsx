import { pricesSectionCards as cards } from "@/constants"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../ui/button"

export default function Prices() {
    return (
        <section id="prices" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <h2 className=" text-center mb-1">Our Prices</h2>
                <div className="bg-gold w-[200px] h-[4px] mx-auto"></div>

                <Accordion type="single" collapsible>
                    {cards.map((card: { id: number, triggerText: string, heading: string, bulletList: string[], note: string, price: string, btnText: string, imgUrl: string }) => (
                        <AccordionItem key={card.id} value={card.triggerText} className="border-b-2 border-black">
                            <AccordionTrigger><h4>{card.triggerText}</h4></AccordionTrigger>
                            <AccordionContent>
                                <div className="flex md:flex-row flex-col justify-between md:items-start items-center">
                                    <img
                                        src={card.imgUrl}
                                        className="w-500 h-500 rounded-[60px]"
                                        alt="Bathroom Renovations"
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
                                            <Button variant="ghost" className="w-[150px] rounded-[20px] border-solid border-[1px] border-black hover:bg-inherit md:mt-[0px] mt-[10px]">
                                                <span className="btnText hover:text-gold">{card.btnText}</span>
                                            </Button>
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