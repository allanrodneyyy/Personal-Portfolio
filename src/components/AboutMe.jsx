import profilePicture from '../assets/me.jpg'

export function AboutMe() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
      <div className="p-5 w-full md:w-full lg:w-[80%] xl:w-[60%] ">
        <img
          src={profilePicture}
          alt="Profile"
          className="w-full h-auto rounded-xl shadow-xl object-cover"
        />
      </div>
      <div className='flex flex-col w-full h-full  gap-2 text-gray-500 font-roboto-condensed font-semibold sm:align-center sm:justify-center'>
        <p className='px-5 text-xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl text-black font-semibold'>ABOUT ME</p>
        <div className='flex gap-10 p-5 sm:w-[80%] md:w-[90%] lg:w-[70%] '>
          <p className='text-base sm:text-base md:text-xl xl:text-xl 2xl:text-2xl'>Entry-level Software engineer experienced in front-end development and supporting back-end systems. Proficient in React, JavaScript, HTML, CSS, with working knowledge of C#, Python, SQL, and Git. A fast learner who builds scalable, maintainable solutions
            with a user-focused approach.</p>
        </div>
      </div>
    </section>
  );
}