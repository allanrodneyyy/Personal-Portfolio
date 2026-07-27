
import { Skills } from './components/Skills'
import { Header } from './components/Header'
import { Subheader } from './components/Subheader'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import Particles from './components/Animations/Particles'
import AnimatedContent from './components/Animations/AnimatedContent'
import { AboutMe } from './components/AboutMe'
import { useTheme } from './context/ThemeContext'


function App() {
  const { theme } = useTheme();
  const particleColors = theme === 'dark'
    ? ['#f5f5f5', '#e5e7eb', '#d1d5db']
    : ['#171717', '#262626', '#404040'];

  return (
    <div className={`relative min-h-dvh transition-colors duration-300 ${theme === 'dark' ? 'bg-neutral-950 text-neutral-100' : 'bg-white text-neutral-900'}`}>

      <div className="fixed inset-0 -z-10 sm:block hidden">
        <Particles
          particleColors={particleColors}
          particleCount={200}
          particleSpread={20}
          speed={0.09}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
        />
      </div>

      <div className="fixed inset-0 -z-10 sm:hidden block">
        <Particles
          particleColors={particleColors}
          particleCount={100}
          particleSpread={10}
          speed={0.09}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
        />
      </div>

      <Header />

      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1.5}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.3}
        delay={0}
      >
        <Subheader />
      </AnimatedContent>


      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1.5}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.3}
        delay={0}
      >
        <AboutMe></AboutMe>
        <Skills />

      </AnimatedContent>


      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={1.5}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.3}
        delay={0}
      >
        <Projects />
      </AnimatedContent>


      <Footer />
    </div>
  )
}



export default App
