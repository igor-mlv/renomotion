import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import NavBar from "@/components/sections/NavBar"
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-root-pattern min-w-[390px]">
      <NavBar />
      <Hero />
      <About />
      <Services />



      <section id="footer" className="h-[2000px] pt-[5rem]">
        <h1>footer</h1>
      </section>

    </div >
  );
}
