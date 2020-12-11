
import Login from './components/Login';
import Register from './components/Register';
import ViewUsers from './components/ViewUsers';
import Footer from './components/Footer';
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
      <h1>Welcome to Harmans List</h1>
      <Router>
      
      <br></br>
      <Link className="link" to="/register">Register</Link><br></br>
      <br></br>
      <Link className="link" to="/login">Login</Link><br></br>
      
      <Switch>
        
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
    
      </Router>
      <ViewUsers/>
      <Footer/>
    </div>
  );
}

export default App;
