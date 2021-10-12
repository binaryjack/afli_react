
import Navbar from 'lib/Components/Primal/Navbar/Navbar';
import Contact from 'Pages/Contact/Contact';
import Home from 'Pages/Home/Home';
import Projects from 'Pages/Projects/Projects';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <>

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/Contact" exact component={Contact} />
        </Switch>
      </Router>
    </>)
}

export default App;


