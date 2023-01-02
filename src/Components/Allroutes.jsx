import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact";
import Homepage from "../Pages/Homepage";
import Project from "../Pages/Project";
import Skills from "../Pages/Skillls";
import About from "../Pages/About";

function Allroutes(){
    return <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about"element={<Homepage />}></Route>
        <Route path="/skills"element={<Homepage />}></Route>
        <Route path="/:id" element={<Homepage />} />
        <Route path="*" exact element={<Homepage />} />
        {/* <Route path='/' element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" exact element={<Homepage />}/> */}
    </Routes>
}

export default Allroutes;