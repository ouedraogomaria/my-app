import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import About from "./pages/About"
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </div>
  );
}

export default App;