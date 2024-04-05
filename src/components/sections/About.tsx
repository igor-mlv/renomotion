import Image from 'next/image';
export default function About() {
    return (
        <section id="about" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <Image
                        src="/assets/aboutSection/about-bathroom.png"
                        alt="Bathroom Renovations"
                        width={600}
                        height={700}
                        className="md:max-w-[100%] max-w-[50%] min-w-[370px] w-[600px] h-auto"
                    />

                    <div className="flex flex-col w-auto max-w-[550px] h-[650px] justify-around">
                        <h2 className="md:text-left text-center">Your Vision, Our Creation!</h2>
                        <p className="md:text-left text-center md:block hidden">
                            We transform spaces—kitchens, bathrooms, bedrooms, and basements—into your dream home. Elevate your lifestyle with Renomotion&apos;s expert designs. Your perfect space starts here.
                        </p>
                        <p className="md:text-left text-center">
                            RenoMotion is not just a business: it&apos;s a family passion. For 25 years, we have infused every project with the values of trust, integrity, and dedication. Our family-centric approach ensures that every home we touch is treated with the same care and attention we would give to our own.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}