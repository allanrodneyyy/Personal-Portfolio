import profilePicture from '../assets/me.jpg'

export function AboutMe() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
      <div className='p-5 sm:w-1/2'>
        <img src={profilePicture} alt="" className='rounded-xl shadow-xl' />
      </div>
      <div className='flex flex-col w-full h-full  gap-2 text-gray-500 font-roboto-condensed font-semibold sm:align-center sm:justify-center'>
        <div className='p-5 sm:w-[66%]'>
          <p className='text-base sm:text-xl'>I'm an aspiring software engineer driven by a passion for turning ideas into clean digital products.</p>
        </div>
        <p className='px-5 text-xl sm:text-xl text-black font-semibold'>ABOUT ME</p>
        <div className='flex gap-10 p-5 sm:w-[80%]'>
          <p className='text-base sm:text-xl'>Entry-level Software engineer experienced in front-end development and supporting back-end systems. Proficient in HTML,
            CSS, JavaScript, with working knowledge of C#, Python, SQL, and Git. A fast learner who builds scalable, maintainable solutions
            with a user-focused approach.</p>
        </div>
      </div>
    </section>
  );
}