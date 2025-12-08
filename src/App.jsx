import About from "./About"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./Contact"
import Home from "./Home"
import Test from "./Test"
import Projects from "./Projects"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/home" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/projects" element={< Projects />} />

          <Route path="/contact" element={< Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
