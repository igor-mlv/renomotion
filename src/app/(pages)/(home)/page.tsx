import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Hero from "@/components/sections/Hero";
import NavBar from "@/components/sections/NavBar"
import Prices from "@/components/sections/Prices";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-root-pattern min-w-[390px]">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Prices />
      <Gallery />



      <section id="footer" className="h-[2000px] pt-[5rem]">
        <h1>footer</h1>
      </section>

    </div >
  );
}
