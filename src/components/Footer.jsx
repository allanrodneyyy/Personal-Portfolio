import '../index.css'
import Contributions from './Contributions';
import { useTheme } from '../context/ThemeContext';

export function Footer() {
  const { theme } = useTheme();

  return (
    <>
      <section className={`p-5 grid grid-cols-1 sm:grid-cols-2 gap-5 font-roboto-condensed transition-colors duration-300 ${theme === 'dark' ? 'text-neutral-200' : 'text-neutral-900'}`}>
        <div className='flex flex-col gap-2'>
          <p className={`border-b pb-2 font-bold ${theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'}`}>Menu</p>
          <div className={`flex flex-col ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-500'}`}>
            <a href="/">Home</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="mailto:allanrodneymaniago@gmail.com" className=''>Contact</a>
          </div>

          <p className='border-b border-gray-200 pb-2 font-bold '>Socials</p>
          <div className='text-gray-500 flex flex-col'>
            <a href='https://www.linkedin.com/in/allanrodneymaniago/ ' target='_blank'>LinkedIn</a>
            <a href='https://github.com/allanrodneyyy' target='_blank'>GitHub</a>
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <div className=''>
            <p className={`border-b pb-2 font-bold ${theme === 'dark' ? 'border-neutral-800' : 'border-gray-200'}`}>GitHub Activity</p>
            <Contributions />
          </div>
        </div>

      </section >


    </>
  );
}