import '../index.css'
import RotatingText from './Animations/RotatingText';

export function Skills() {
  return (
    <>

      <section className='grid grid-cols-1 md:grid-cols-2 sm:my-10
      md:justify-between justify-center p-5 gap-10 sm:gap-5 items-center
      font-roboto-condensed'>

        <div className='text-6xl md:text-9xl tracking-tighter flex flex-col items-center md:block text-black '>
          <p>Developer</p>
          <p>Designer</p>
          <p>Creator/</p>
        </div>

        <div className='flex flex-col items-center gap-5 sm:gap-10'>
          <p className='text-5xl md:text-8xl text-black tracking-tighter'>Skills</p>
          <div className='flex justify-around w-full gap-0.5'>
            <div className='flex flex-col gap-2'>
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
            </div>
            <div className='flex flex-col gap-2'>
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
            </div>
          </div>
        </div>
      </section >

    </>
  );
}