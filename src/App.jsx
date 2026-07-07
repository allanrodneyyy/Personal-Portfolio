
import { Skills } from './components/Skills'
import { Header } from './components/Header'
import { Subheader } from './components/Subheader'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
      <Header />
      <Subheader></Subheader>
      <Skills />
      <Footer />
    </>
  )
}

export default App
