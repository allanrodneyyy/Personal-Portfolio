import '../index.css'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaRegFilePdf } from "react-icons/fa6";
import { GoMoon } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { CiKeyboard } from "react-icons/ci";
import SlotWord from "./Animations/SlotWord";
import TrueFocus from './Animations/TrueFocus';


export function Header() {
  return (
    <>
      <nav className="font-roboto-condensed
      border border-gray-200 flex justify-between 
      p-5 tracking-tight items-center
      bg-gray-50">
        <div className='block sm:hidden'>
          <SlotWord className="sm:hidden block " word="ARFM" />
        </div>


        <div className='hidden sm:block text-gray-500'>
          <p>Developer & Designer</p>
        </div>

        {/* <p className='text-2xl'>Developer, designer</p> */}

        {/* <p className='sm:block hidden text-gray-500'>Aspiring Full Stack Developer</p>
        <p className='sm:hidden block text-gray-500'>A</p> */}
        <section className='flex gap-2'>
          <div className='flex gap-4 text-gray-500 items-center'>
            <div className='items-center gap-3 border px-2 py-1 rounded hidden sm:flex'>
              <CiSearch />
              <p className='text-sm bg-white'>Search</p>
              <CiKeyboard />
            </div>
            <a href="#projects" className='hidden sm:block'>
              Projects
            </a>
            <a href="#" className='hidden sm:block'>
              Experience
            </a>
          </div>
          <div className='flex gap-2 sm:gap-5 text-gray-500 items-center'>
            <p className='text-gray-200 hidden sm:block'>|</p>
            <p><FaRegFilePdf /></p>
            <p><FiGithub /></p>
            <p><SlSocialLinkedin /></p>
            <p className='text-gray-200'>|</p>
            <div className='items-center gap-3 border border-gray-300 px-2 py-1 rounded block sm:hidden'>
              <CiSearch />
            </div>
            <p><GoMoon /></p>
          </div>
        </section>

      </nav>


    </>
  );
}