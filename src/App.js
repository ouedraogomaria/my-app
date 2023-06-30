import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home.js"
import Navbar from "./components/Navbar.js"
import About from "./pages/About.js"
import Banner from "./components/Banner.js"
import ApartmentColor from './components/ApartmentColor.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <ApartmentColor/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;