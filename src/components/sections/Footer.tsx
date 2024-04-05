import Image from 'next/image';
export default function About() {
    return (
        <footer id="footer" className=" flex justify-center items-center pt-[100px]">
            <div className="lg:max-w-[1280px] w-full px-2">
                <div className="flex flex-col justify-between items-center p-[10px]">
                    <div className="flex md:flex-row flex-col justify-around items-center md:space-y-0 space-y-8 border-t-[2px] border-b-[2px] border-gold py-[20px]">
                        <div className="flex flex-col justify-between items-center md:mr-[30px] mr-0 space-y-2 ">
                            <a href="tel:+16132226865"><p>+1(613)222-6865</p></a>
                            <a href="mailto:renomotion.inc@gmail.com"><p>renomotion.inc@gmail.com</p></a>
                        </div>

                        <Image
                            src="/assets/logo.svg"
                            alt="logo"
                            width={370}
                            height={100}
                            className="mx-[30px] h-auto"

                        />

                        <p className="text-center mx-[30px] ">475 Elgin Street<br />Ottawa ON K2P 2E6<br />Canada</p>
                    </div>

                    <div className="flex flex-col justify-between items-center mt-[30px] ">
                        <p className="text-center">© {new Date().getFullYear()} Renomotion Inc. All rights reserved.</p>
                        <p className="text-center mt-[10px]">Privacy policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}