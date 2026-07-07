import '../index.css'

export function Skills() {
  return (
    <>
      <section className='grid grid-cols-1  md:grid-cols-2 
      md:justify-between justify-center p-5 gap-10 sm:gap-5 items-center
      font-roboto-condensed'>

        <div className='text-6xl md:text-9xl tracking-tighter flex flex-col items-center md:block text-gray-500'>
          <p>Developer</p>
          <p>Designer</p>
          <p>Creator/</p>
        </div>

        <div className='flex flex-col items-center gap-5 sm:gap-10'>
          <p className='text-5xl md:text-8xl text-gray-500 tracking-tighter'>Skills</p>
          <div className='flex justify-around w-full gap-0.5'>
            <div className='flex flex-col gap-2'>
              <p className='hidden sm:block font-bold text-gray-500'>Language</p>
              <section className='flex flex-col gap-0.5'>
                <p>JavaScript</p>
                <p>SQL</p>
                <p>Java</p>
              </section>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='hidden sm:block font-bold text-gray-500'>Frameworks & Libraries</p>
              <section className='flex flex-col gap-0.5'>
                <p>TailwindCSS</p>
                <p>Express.js</p>
                <p>Node.js</p>
              </section>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='hidden sm:block font-bold text-gray-500'>Tools</p>
              <section className='flex flex-col gap-0.5'>
                <p>Git & GitHub</p>
                <p>Docker</p>
              </section>
            </div>
          </div>
        </div>
      </section >

    </>
  );
}