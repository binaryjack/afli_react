import BtnToggle from 'lib/components/BtnToggle/BtnToggle';
import Navbar from 'lib/components/primal/Navbar/Navbar';
import Contact from 'pages/Contact/Contact';
import Home from 'pages/Home/Home';
import Persons from 'pages/Persons/Persons';
import Projects from 'pages/Projects/Projects';
import ValidationVitrine from 'pages/ValidationVitrine/ValidationVitrine';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BtnToggle />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Persons" exact component={Persons} />
          <Route path="/DataGrid" exact component={Persons} />
          <Route path="/ValidationVitrine" exact component={ValidationVitrine} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
