import { LiaHighlighterSolid } from 'react-icons/lia';
import '../index.css'
import { FiArrowDownRight } from "react-icons/fi";

export function Subheader() {
  return (
    <>
      <section className="p-5 font-roboto-condensed
      min-h-screen
      grid grid-rows-3 
      relative top-15  
      tracking-tight
      ">
        <div className=''>
          <p className='sm:block hidden'>Allan Rodney Maniago</p>
          <p className='sm:hidden block text-7xl'>Aspiring full stack developer</p>
        </div>
        <div className='flex flex-col gap-3 sm:gap-10 text-gray-500 font-semibold'>
          <div className='hidden sm:block'>
            <FiArrowDownRight color='light-gray' size={52} />
          </div>
          <div>
            <p className='hidden sm:flex md:w-sm text-base w-3/4 sm:text-base'>
              As an Aspiring full stack developer, I love building things that scratches my interest.
            </p>
            <p className='flex sm:hidden md:w-sm text-base w-3/4 sm:text-2xl'>
              that loves building things that scratches his interest.
            </p>
          </div>

          <div className=''>
            <div className='block sm:hidden mb-2'>
              <FiArrowDownRight color='light-gray' size={30} />
            </div>
            <button className='flex items-center  gap-2 border px-5 py-2 text-white bg-gray-500 rounded-4xl'>
              Contact me
            </button>
          </div>
        </div>
        <div className="mt-auto mb-8 flex flex-col items-end text-gray-500 font-semibold">
          <p className='text-sm md:text-base'>Employment Status:</p>
          <p className='text-sm md:text-base'>Available for work</p>
          <p className='text-3xl md:text-9xl'>JUL'26</p>
        </div>
      </section >

    </>

  );
}