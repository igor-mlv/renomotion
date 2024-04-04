import Image from "next/image"
import ContactUsForm from "../ui/ContactUsForm"
export default function ContactUs() {
    return (
        <section id="contact" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <h2 className=" text-center mb-1">
                    <span className="text-gold">Get</span> Ready to Transform <span className="text-gold">Your Space!</span>
                </h2>

                <div className="flex  md:flex-row flex-col justify-around items-center mt-[80px] ">
                    <Image
                        width={500}
                        height={500}
                        src="/assets/contactSection/contact-powder.png"
                        alt="Bathroom renovation"
                        className="rounded-[30px] object-cover object-center md:block hidden"
                        placeholder="blur"
                        blurDataURL="/assets/contactSection/skeleton/contact-skeleton-powder.png"
                    />
                    <ContactUsForm />
                </div>
            </div>
        </section>
    )
}