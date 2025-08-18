import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import Unknown1 from './Unkown1';
import Unknown2 from './Unknown2';
import Unknown3 from './Unknown3';
import Contact from './Contact';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
            <Route path="unknown1" element={<Unknown1/>}/>
           <Route path="unknown2" element={<Unknown2/>}/>
           <Route path="unknown3" element={<Unknown3/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
