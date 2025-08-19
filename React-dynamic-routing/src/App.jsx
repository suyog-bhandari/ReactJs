import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import Unknown1 from './Unknown1';
import Unknown2 from './Unknown2';
import Unknown3 from './Unknown3';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import UserList from './UserList';
import UserDetail from './UserDetails';

function App() {
  return (
    <>

      <Routes>
        <Route element={<NavBar/>}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList/>}/>
          <Route path="/about" element={<About />} />
          <Route path='/users/:id' element={<UserDetail/>}/>
        </Route>

        <Route path="/contact" element={<Contact />}>
           <Route path="unknown1" element={<Unknown1/>}/>
           <Route path="unknown2" element={<Unknown2/>}/>
           <Route path="unknown3" element={<Unknown3/>}/>
        </Route>

        <Route path='/*' element={<PageNotFound/>}/>

      </Routes>
    </>
  );
}

export default App;
