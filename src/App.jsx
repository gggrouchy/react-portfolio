import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './sections/AboutMe'
import Skills from './sections/Skills'
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 p-3 md:p-7">
          <div className="">
            <AboutMe />
            <Skills />
            </div>
          <div className="col-span-2">
            <Projects />
            <Contact />
            </div>
      </div>

    </>
  )
}

export default App
