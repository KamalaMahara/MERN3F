import About from "./About"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./Contact"
import Home from "./Home"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/contact" element={< Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
