
import { Skills } from './components/Skills'
import { Header } from './components/Header'
import { Subheader } from './components/Subheader'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router'
import Particles from './components/Particles'
import AnimatedContent from './components/AnimatedContent'


function App() {

  return (
    <div className="relative min-h-screen ">

      <div className="fixed inset-0 -z-10">
        <Particles
          particleColors={['#ffffff']}
          particleCount={200}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
        />
      </div>

      <Header />

      <AnimatedContent
        distance={100}
        direction="vertical"
        duration={0.8}
      >
        <Subheader />
      </AnimatedContent>


      <AnimatedContent
        distance={100}
        direction="vertical"
        duration={1}
      >
        <Skills />
      </AnimatedContent>


      <AnimatedContent
        distance={100}
        direction="vertical"
        duration={0.8}
      >
        <Projects />
      </AnimatedContent>


      <Footer />
    </div>
  )
}



export default App
