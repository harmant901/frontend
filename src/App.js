import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Welcome to HarmansList</h1>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      
      <Switch>
        <Route path="/" component={Home} exact /> 
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
        
    </div>
  );
}

export default App;
