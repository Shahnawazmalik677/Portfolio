import About from './components/aboutMe/About';
import Header from './components/header/Header'
import Heading from './components/heading/Heading';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from './components/resume/Resume';
function App() {


  return (
    <>
  <BrowserRouter>
     <Heading/>
      <Header/>
      <Routes>
        <Route path="/" element={<About/>}> </Route>
        <Route path="resume" element={<Resume/>}> </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
