import '../index.css'
import RotatingText from './Animations/RotatingText';
import { FiArrowRight } from "react-icons/fi";
import { BsStack } from "react-icons/bs";
import { useEffect, useRef, useState } from 'react';
import { FaDocker, FaGit, FaGitAlt, FaHtml5, FaNode, FaPython, FaFigma, FaGithub, FaNpm } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiExpress, SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { GrMysql } from 'react-icons/gr';
import { VscCode } from 'react-icons/vsc';

export function Skills() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 sm:my-10
      md:justify-between justify-center p-5 gap-10 sm:gap-5 items-center sm:py-20
      '>

        <div className='text-6xl md:text-9xl tracking-tighter flex flex-col items-center md:block text-black '>
          <p className='font-roboto-condensed font-semibold'>Developer</p>
          <p className='font-roboto-condensed font-semibold'>Designer</p>
          <p className='font-roboto-condensed font-semibold'>Creator/</p>
        </div>

        <div className='flex flex-col gap-2 sm:gap-4'>
          <div className='flex items-center justify-between w-4/5'>
            <p className='text-black tracking-tighter text-xl sm:text-2xl font-roboto-condensed'>Technologies</p>
            {/* <section className='flex items-center gap-5 text-gray-500'>
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >{isHovered ? <BsStack color='black' /> : <BsStack />}</button>
            </section> */}
          </div>

          <section>

          </section>
          <section className='flex flex-col gap-2 font-roboto-condensed'>
            <p className='text-gray-500 text-sm tracking-tighter'>FRONTEND</p>
            <div className='flex gap-2 flex-wrap'>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaHtml5 color='#E34F26' />
                HTML5
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaCss3 color='#2965f1' />
                CSS3
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <IoLogoJavascript color='#F7DF1E' />
                JavaScript
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <RiTailwindCssFill color='#22D3EE' />
                TailwindCSS
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <SiVite color='#646CFF' />
                Vite
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaReact color='#22D3EE' />
                React
              </p>

            </div>
          </section>
          <section className='flex flex-col gap-2 font-roboto-condensed'>
            <p className='text-gray-500 text-sm tracking-tighter'>BACKEND & DATABASE</p>
            <div className='flex gap-2 flex-wrap'>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaNode color='#3C873A' />
                Node.js
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <SiExpress color='#22D3EE' />
                Express.js
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaPython color='#306998 ' />
                Python
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <SiMongodb color='#00ED64' />
                MongoDB
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <GrMysql color='#00758F' />
                MySQL
              </p>


            </div>
          </section>

          <section className='flex flex-col gap-2 font-roboto-condensed'>
            <p className='text-gray-500 text-sm tracking-tighter'>TOOLS</p>
            <div className='flex gap-2 flex-wrap'>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaDocker color='#2496ED ' />
                Docker
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaGit color='#E34F26' />
                Git
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaGithub color='#24292e ' />
                GitHub
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaFigma color='#a259ff' />
                Figma
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <VscCode color='#0065A9' />
                VS Code
              </p>
              <p className='flex items-center gap-1 text-sm border-dashed border-gray-400 border rounded-md py-1 px-2.5 shadow'>
                <FaNpm color='#CC3534' />
                npm
              </p>

            </div>
          </section>



          <div className='flex justify-around w-full gap-0.5'>
            {/* <div className='flex gap-2'>
              <p className='hidden sm:block font-bold text-black'>Language</p>

              <section className='flex flex-col gap-0.5 text-gray-500'>
                <RotatingText
                  texts={['JavaScript', 'JavaScript']}
                  staggerFrom="last"
                  initial={{ y: "-120%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="words"
                  auto
                  loop={false}
                />
                <RotatingText
                  texts={['SQL', 'SQL']}
                  staggerFrom="last"
                  initial={{ y: "-120%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="words"
                  auto
                  loop={false}
                />
                <RotatingText
                  texts={['Java', 'Java']}
                  staggerFrom="last"
                  initial={{ y: "-120%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="words"
                  auto
                  loop={false}
                />
              </section>
            </div> */}
            {/* <div className='flex flex-col gap-2'>
              <p className='hidden sm:block font-bold text-black'>Frameworks & Libraries</p>
              <section className='flex flex-col gap-0.5 text-gray-500'>
                <RotatingText
                  texts={['TailwindCSS', 'TailwindCSS']}
                  staggerFrom="last"
                  initial={{ y: "-120%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="words"
                  auto
                  loop={false}
                />
                <RotatingText
                  texts={['Express.js', 'Express.js']}
                  staggerFrom="last"
                  initial={{ y: "-120%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="words"
                  auto
                  loop={false}
                />
                <RotatingText
                  texts={['Node.js', 'Node.js']}
                  staggerFrom="last"
                  initial={{ y: "-120%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="words"
                  auto
                  loop={false}
                />
              </section>
            </div>
            <div className='flex flex-col gap-2 '>
              <p className='hidden sm:block font-bold text-black'>Tools</p>
              <section className='flex flex-col gap-0.5 text-gray-500'>
                <RotatingText
                  texts={['Git & GitHub', 'Git & GitHub']}
                  staggerFrom="last"
                  initial={{ y: "-120%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="words"
                  auto
                  loop={false}
                />
                <RotatingText
                  texts={['Docker', 'Docker']}
                  staggerFrom="last"
                  initial={{ y: "-120%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                  splitBy="words"
                  auto
                  loop={false}
                />
              </section>
            </div> */}
          </div>
        </div>
      </section >

    </>
  );
}