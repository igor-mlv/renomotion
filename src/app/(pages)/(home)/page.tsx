import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import NavBar from "@/components/sections/NavBar"

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-root-pattern min-w-[390px]">
      <NavBar />
      <Hero />
      <About />

      <section id="about" className="h-[2000px] pt-[5rem]">
        <h1>hi</h1>
      </section>

      <section id="services" className="h-[2000px] pt-[5rem]">
        <h1>hi services</h1>
      </section>

    </div >
  );
}
