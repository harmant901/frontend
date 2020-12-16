
import Login from './components/Login';
import Register from './components/Register';
import ViewUsers from './components/ViewUsers';
import Footer from './components/Footer';
import Announcements from './components/Announcements';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
    
  return (
    
    <div className="App">
      <div className="wrapper-header">
        <div className="box-header">
          <Header/>
        </div>
        <div className="box">
          
        </div>
      </div>

      <div className="wrapper">
        <div className="box">
        <Router>
      
          <div className="link-wrapper">
            
            <center><Link id="link1" className="link" to="/Register">Register</Link></center>
            <center><Link id="link2" className="link" to="/Login">Login</Link></center>
            
            
          </div>

          
          <Switch>
            
            <Route path="/register" component={Register} exact />
            <Route path="/login" component={Login} exact />
          </Switch>
    
      </Router>
        </div>
        <div className="box">
          <div class="online-users-wrapper">
            <center><h1 className="online-users-header"><span>Online Users</span></h1></center>
            <ViewUsers/>
          </div>
        </div>
        <div className="box">
          <div class="announcements-wrapper">
          <center><h1 className="announcements-header"><span>Announcements</span></h1></center>
          <Announcements/>
          </div>
        </div>
      </div>

      
      <Footer />
      
    </div>
  );
}

export default App;
