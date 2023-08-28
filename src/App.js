
import './App.css';
import Navbar from './navbar';
import Contact from './Contact';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() 
{
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Contact /> */}
        <div className = "content">
          <Switch>
            <Route exact path = "/">
              <Home/>
            </Route>
            <Route path = "/create">
              <Create/>
            </Route>
            <Route path = "/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
