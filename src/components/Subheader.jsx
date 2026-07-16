import { LiaHighlighterSolid } from 'react-icons/lia';
import '../index.css'
import { FiArrowDownLeft, FiArrowDownRight } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

export function Subheader() {
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
            className="
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
            text-neutral-900
            sm:block
            hidden"
          >
            ALLAN RODNEY MANIAGO
          </h1>
          <h1
            className="
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
            text-neutral-900
            sm:hidden
            block"
          >
            Aspiring software engineer
          </h1>
        </div>
        <div className=' flex flex-col gap-5 text-gray-500 font-semibold tracking-tighter'>
          <div className='hidden sm:block'>
            <FiArrowDownRight color='light-gray' size={52} />
          </div>
          <div className=''>
            <p className='hidden sm:flex md:w-sm text-base w-3/4 sm:text-3xl '>
              Aspiring Software Engineer passionate about building scalable applications and intuitive user experiences.
            </p>
            <p className='flex sm:hidden md:w-sm text-base w-3/4 sm:text-2xl'>
              that is passionate about building scalable applications and intuitive user experiences.
            </p>

          </div>

          <div className=''>
            <div className='block sm:hidden mb-2'>
              <FiArrowDownRight color='light-gray' size={30} />
            </div>
            <a href="mailto:allanrodneymaniago@gmail.com" className=''>
              <button className='button shadow-xl flex items-center gap-0.5 border px-5 py-2 sm:px-6 sm:py-4 text-white bg-black rounded-4xl hover:cursor-pointer
              '>
                Contact me
                <FiArrowUpRight />
              </button>
            </a>

          </div>
        </div>
        <div className=" 
          flex
          flex-col
          items-end
          justify-end
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
        </div>
      </section >


    </>

  );
}