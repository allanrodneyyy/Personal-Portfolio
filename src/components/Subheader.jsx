import '../index.css'
import { FiArrowDownLeft, FiArrowDownRight } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import TimeNow from './Animations/TimeNow';
import { useTheme } from '../context/ThemeContext';

export function Subheader() {
  const { theme } = useTheme();

  return (
    <>
      <section id="home-section" className=" font-roboto-condensed
      grid grid-rows-3 px-5
      tracking-tight
      relative
      min-h-screen
      mb-5
      ">
        <div className='relative'>
          <h1
            className={`
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            whitespace-nowrap
            text-[10vw]
            leading-none
            font-black
            tracking-tighter
            ${theme === 'dark' ? 'text-neutral-100' : 'text-neutral-900'}
            sm:block
            hidden`}
          >
            ALLAN RODNEY MANIAGO
          </h1>
          <h1
            className={`
            pointer-events-none
            absolute
            left-1/3
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-[10vw]
            leading-none
            font-black
            tracking-tighter
            ${theme === 'dark' ? 'text-neutral-100' : 'text-neutral-900'}
            sm:hidden
            block`}
          >
            Software Engineer
            that turns ideas into products
          </h1>
        </div>
        <div className={`flex flex-col gap-5 font-semibold tracking-tighter ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-500'}`}>
          <div className='hidden sm:block'>
            <FiArrowDownRight color='light-gray' size={52} />
          </div>
          <div className=''>
            <p className='hidden sm:flex md:w-sm text-base w-3/4 sm:text-3xl '>
              Software Engineer that turns ideas into products and passionate about building scalable applications and intuitive user experiences.
            </p>
            <p className='flex sm:hidden md:w-sm text-base w-3/4 sm:text-2xl'>
              and is passionate about building scalable applications and intuitive user experiences.
            </p>

          </div>

          <div className=''>
            <div className='block sm:hidden mb-2'>
              <FiArrowDownRight color='light-gray' size={30} />
            </div>
            <a href="mailto:allanrodneymaniago@gmail.com" className=''>
              <button className={`button shadow-xl flex items-center gap-0.5 border px-5 py-2 sm:px-6 sm:py-4 rounded-4xl transform transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg ${theme === 'dark' ? 'border-neutral-700 bg-neutral-100 text-neutral-950 hover:bg-white' : 'border-gray-200 bg-black text-white sm:bg-gray-700 hover:bg-black'}`}>
                Contact me
                <FiArrowUpRight />
              </button>
            </a>

          </div>
        </div>

        <div className='flex justify-between relative'>
          <section className='absolute bottom-16'>
            <TimeNow />
          </section>
          <section className='flex flex-col absolute right-0 bottom-14'>
            <div className='hidden sm:block mb-2 justify-items-end'>
              <FiArrowDownLeft color='light-gray' size={52} />
            </div>
            <div className='block sm:hidden mb-2 justify-items-end'>
              <FiArrowDownLeft color='light-gray' size={30} />
            </div>
            <div className='text-gray-500'>
              <p className='text-sm md:text-base'>Employment Status:</p>
              <p className='text-sm md:text-base'>Available for work</p>
              <p className={`text-4xl font-extrabold md:text-6xl lg:text-8xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>JUL'26</p>
            </div>

          </section>
        </div>

        {/* <div className=" flex flex-col items-end justify-end
          text-gray-500
          absolute
          sm:right-5
          sm:bottom-10
          bottom-0
          right-5
          font-semibold">
          <div className='hidden sm:block'>
            <FiArrowDownLeft color='light-gray' size={52} />
          </div>
          <div className='block sm:hidden mb-2'>
            <FiArrowDownLeft color='light-gray' size={30} />
          </div>
          <p className='text-sm md:text-base'>Employment Status:</p>
          <p className='text-sm md:text-base'>Available for work</p>
          <p className='text-black text-4xl font-extrabold md:text-6xl lg:text-8xl'>JUL'26</p>
        </div> */}
      </section >


    </>

  );
}