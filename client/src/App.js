
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from './components/Layout/Landing';
import Navbar from './components/Layout/Navbar';
import Loogin from './components/auth/Loogin';
import Register from './components/auth/Register';
function App() {
  return (
    <Router>
    <div className="App">
      <div>
   <Navbar/>
   <Route exact path ="/" component={Landing}/>
  <section className="container">
  <switch>
    <Route exact path="/loging" component={Loogin}/>
    <Route exact path='/Register' component={Register}/>
  </switch>
  </section>
  
   {/* <Landing/> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
