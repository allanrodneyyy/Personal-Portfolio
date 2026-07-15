import { Link } from 'react-router';
import '../index.css'
import Contributions from './Contributions';

export function Footer() {
  return (
    <>
      <section className='p-5 grid grid-cols-1 sm:grid-cols-2
      gap-5
      font-roboto-condensed'>
        <div className='flex flex-col gap-2'>
          <p className='border-b border-gray-200 pb-2 font-bold'>Menu</p>
          <div className='text-gray-500 flex flex-col'>
            <a href="/">Home</a>
            <a href="#about">Projects</a>
            <p>About</p>
            <p>Contact</p>
          </div>

          <p className='border-b border-gray-200 pb-2 font-bold '>Socials</p>
          <div className='text-gray-500 flex flex-col'>
            <a href='https://www.linkedin.com/in/allanrodneymaniago/ ' target='_blank'>LinkedIn</a>
            <a href='https://github.com/allanrodneyyy' target='_blank'>GitHub</a>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className=''>
            <p className='border-b border-b-gray-200 pb-2 font-bold'>GitHub Activity</p>
            <Contributions />
          </div>
        </div>

      </section>


    </>
  );
}