import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import ErrorPage from "./pages/ErrorPage.js";


function App() {
  return (
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<ErrorPage/>} />
      </Routes>
  );
}

export default App;