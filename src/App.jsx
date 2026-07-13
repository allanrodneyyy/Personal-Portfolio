
import { Skills } from './components/Skills'
import { Header } from './components/Header'
import { Subheader } from './components/Subheader'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router'
import Particles from './components/Animations/Particles'
import AnimatedContent from './components/Animations/AnimatedContent'


function App() {

  return (
    <div className="relative min-h-screen ">

      <div className="fixed inset-0 -z-10 sm:block hidden">
        <Particles
          particleColors={['#171717', '#262626', '#404040']}
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
          particleColors={['#171717', '#262626', '#404040']}
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
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.3}
        delay={0}
        once
      >
        <Subheader />
      </AnimatedContent>


      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
        ease="power3.out"
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.3}
        delay={0}
      >
        <Skills />
      </AnimatedContent>


      <AnimatedContent
        distance={100}
        direction="vertical"
        reverse={false}
        duration={0.8}
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
