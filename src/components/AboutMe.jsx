import profilePicture from '../assets/me.jpg'
import { useTheme } from '../context/ThemeContext';

export function AboutMe() {
  const { theme } = useTheme();

  return (
    <section id="about" className={`grid grid-cols-1 sm:grid-cols-2 place-items-center transition-colors duration-300 ${theme === 'dark' ? 'text-neutral-200' : 'text-neutral-900'}`}>
      <div className="p-5 w-full md:w-full lg:w-[80%] xl:w-[60%] ">
        <img
          src={profilePicture}
          alt="Profile"
          className="w-full h-auto rounded-xl shadow-xl object-cover"
        />
      </div>
      <div className='flex flex-col w-full h-full  gap-2 text-gray-500 font-roboto-condensed font-semibold sm:align-center sm:justify-center'>
        <p className={`px-5 text-xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl 2xl:text-4xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>ABOUT ME</p>
        <div className='flex gap-10 p-5 sm:w-[80%] md:w-[90%] lg:w-[70%] '>
          <p className={`text-base sm:text-base md:text-xl xl:text-xl 2xl:text-2xl ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
            Entry-level Software Engineer with experience building modern web applications using React, JavaScript, HTML, CSS, and Tailwind CSS. Skilled in developing user-focused front-end solutions while supporting backend systems with Python, FastAPI, SQL, and REST APIs. Experienced in writing clean, maintainable code and collaborating on scalable software solutions. Passionate about learning new technologies and building reliable products.
          </p>
        </div>
      </div>
    </section>
  );
}