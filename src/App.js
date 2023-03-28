import { Routes, Route } from 'react-router-dom';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Pages
import Welcome from './pages/main/welcome/Welcome';
import Projects from './pages/main/portfolio/Projects';
import About from './pages/main/About';
import Contact from './pages/main/contact/Contact';
import Blog from './pages/Blog';

import './assets/global.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <Routes>
        <Route path='/' element={<Welcome />} />
        
        <Route path='/projects' element={<Projects />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/blog' element={<Blog />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
