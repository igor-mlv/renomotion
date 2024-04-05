import ContactUsForm from "../ui/ContactUsForm"
import Image from 'next/image'
export default function ContactUs() {
    return (
        <section id="contact" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <h2 className=" text-center mb-1">
                    <span className="text-gold">Get</span> Ready to Transform <span className="text-gold">Your Space!</span>
                </h2>

                <div className="flex  md:flex-row flex-col justify-around items-center mt-[80px] ">
                    <div className="flex flex-col justify-around items-center max-w-[500px] min-h-[300px]">
                        <div className="flex flex-col justify-center items-center space-y-4">
                            <p className="text-center ">Do you have questions about our services or want to schedule a consultation?</p>
                            <p className="text-center ">We&apos;d love to hear from you!</p>
                            <p className="text-center ">Feel free to reach out to us using the contact information provided below:</p>
                        </div>

                        <div className="flex justify-between items-center pt-[40px]">
                            <Image
                                src="/assets/telephone.svg"
                                alt="phone number"
                                width={47}
                                height={46}
                            />
                            <a href="tel:+16132226865" className="pl-[20px]"><p>+1(613)222-6865</p></a>
                        </div>
                        <div className="flex justify-between items-center pt-[20px] md:pb-0 pb-[50px]">
                            <Image
                                src="/assets/mail.svg"
                                alt="phone number"
                                width={47}
                                height={46}
                                className="md:block hidden"
                            />
                            <a href="mailto:renomotion.inc@gmail.com" className="md:pl-[20px]"><p>renomotion.inc@gmail.com</p></a>
                        </div>
                    </div>
                    <ContactUsForm />
                </div>
            </div>
        </section>
    )
}