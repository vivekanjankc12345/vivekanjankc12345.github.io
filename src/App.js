//import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Mainhome from "./MainHome"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Skill from './Skill';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
        <Route path='/' element={<Mainhome />} >
        <Route index  element={<Home />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Skill' element={<Skill/>} />
        <Route path='/Project' element={<Project />} />
        
        </Route>
  </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
