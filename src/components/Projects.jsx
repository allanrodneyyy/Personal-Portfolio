import { useState } from "react";
import { Images } from "./Images";

export function Projects() {

  const [projectNumber, setProjectNumber] = useState("01");

  return (
    <section id="projects" className="min-h-screen font-black p-5
    font-roboto-condensed ">
      <div className="grid grid-cols-1 gap-10 mb-10 ">
        <p className="text-7xl md:text-9xl font-semibold tracking-tighter">Personal Project/ </p>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div></div>
          <p className='tracking-tighter  sm:flex md:w-sm text-base w-3/4 sm:text-2xl text-gray-500 2xl:text-3xl'>
            Ideas that are made into reliable digital projects through clean code, thoughtful design, and with purpose.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr]">
        <div className="hidden sm:block">
          <h1 className="
              sticky top-0
              text-[10vw]
              2xl:text-[15vw]
              leading-none
              font-black
              tracking-tighter
            ">
            {projectNumber}
          </h1>
        </div>

        <div className="space-y-5">
          <Images setProjectNumber={setProjectNumber} />
        </div>


      </div>
    </section>
  );
}