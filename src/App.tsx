import BtnToggle from 'lib/components/BtnToggle/BtnToggle';
import Navbar from 'lib/components/primal/Navbar/Navbar';
import Contact from 'pages/Contact/Contact';
import Home from 'pages/Home/Home';
import Persons from 'pages/Persons/Persons';
import Projects from 'pages/Projects/Projects';
import ValidationVitrine from 'pages/ValidationVitrine/ValidationVitrine';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <BtnToggle />
        <Navbar />
        <Route path="/" element={Home} />
        <Route path="/Projects" element={Projects} />
        <Route path="/Contact" element={Contact} />
        <Route path="/Persons" element={Persons} />
        <Route path="/DataGrid" element={Persons} />
        <Route path="/ValidationVitrine" element={ValidationVitrine} />
      </Router>
    </>
  );
};

export default App;
