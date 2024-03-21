import NavBar from "@/components/sections/NavBar"

export default function Home() {
  return (
    <div className="w-full overflow-hidden bg-root-pattern">

      <NavBar />
      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full ">
          <h1>NavBar</h1>
        </div>
      </div>

      <div className="sm:px-16 px-6 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full ">
          <h1>NavBar</h1>
        </div>
      </div>

    </div >
  );
}
