
import BtnToggle from 'lib/Components/BtnToggle/BtnToggle';
import Navbar from 'lib/Components/Primal/Navbar/Navbar';
import Contact from 'Pages/Contact/Contact';
import Home from 'Pages/Home/Home';
import Projects from 'Pages/Projects/Projects';
import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IContextProps, ThemeContext } from './lib/Context/Theme/ThemeContext';



const App = () => {

  const { theme } = useContext<IContextProps>(ThemeContext);
  console.log(theme);


  return (
    <>
      <BtnToggle />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App;


