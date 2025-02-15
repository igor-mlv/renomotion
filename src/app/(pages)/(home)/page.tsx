import About from "@/components/sections/About";
import ContactUs from "@/components/sections/ContactUs";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import NavBar from "@/components/sections/NavBar"
import Prices from "@/components/sections/Prices";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-root-pattern min-w-[390px]">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Prices />
      <Gallery />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div >
  );
}
