// Test Edit
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/navigation/Footer";

// Pages
import Main from "./pages/Main";
import Media from "./pages/Media";

// Styling
import "./assets/global.css";
import "./components/navigation/navigation.css";
import "./pages/pages.css";
import "./components/Sections/sections.css";

function App() {

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/media" element={<Media />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
