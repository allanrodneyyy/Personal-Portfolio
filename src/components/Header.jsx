import '../index.css'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaRegFilePdf } from "react-icons/fa6";
import { GoMoon } from "react-icons/go";
import { GoSun } from "react-icons/go";
import SlotWord from "./Animations/SlotWord";
import cv from '../assets/MANIAGO-CV-2026.pdf'
import { useTheme } from '../context/ThemeContext';


export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <nav className={`font-roboto-condensed border flex justify-between p-5 tracking-tight items-center relative transition-colors duration-300 ${theme === 'dark' ? 'border-neutral-800 bg-neutral-900 text-neutral-100' : 'border-gray-200 bg-gray-50 text-neutral-900'}`}>
        <div className='block sm:hidden'>
          <SlotWord className="sm:hidden block " word="ARFM" />
        </div>


        <div className={`hidden sm:block ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-500'}`}>
          <p>Developer & Designer</p>
        </div>

        {/* <p className='text-2xl'>Developer, designer</p> */}

        {/* <p className='sm:block hidden text-gray-500'>Aspiring Full Stack Developer</p>
        <p className='sm:hidden block text-gray-500'>A</p> */}
        <section className='flex gap-2'>

          <div className={`flex gap-2 sm:gap-5 items-center ${theme === 'dark' ? 'text-neutral-400' : 'text-gray-500'}`}>
            <a href={cv} download="MANIAGO-CV-2026.pdf">
              <p><FaRegFilePdf /></p>
            </a>
            <a href='https://github.com/allanrodneyyy' target='_blank'><FiGithub /></a>
            <a href='https://www.linkedin.com/in/allanrodneymaniago/ ' target='_blank'><SlSocialLinkedin /></a>
            <p className={`${theme === 'dark' ? 'text-neutral-700' : 'text-gray-200'}`}>|</p>
            <button type="button" onClick={toggleTheme} className={`rounded-full p-2 transition-colors duration-300 ${theme === 'dark' ? 'bg-neutral-800 text-neutral-100 hover:bg-neutral-700' : 'bg-white text-neutral-900 hover:bg-gray-100'}`} aria-label="Toggle theme">
              {theme === 'dark' ? <GoSun /> : <GoMoon />}
            </button>
          </div>
        </section>

      </nav >


    </>
  );
}