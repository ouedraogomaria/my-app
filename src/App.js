import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home.js"
import About from "./pages/About.js"


function App() {
  return (
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
  );
}

export default App;