import React from 'react';
import './LoginRegister.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <center>
                <h2>Login</h2>
                <form method="POST" action="/user/login">
                    <input type="text" name="username" placeholder="username"></input><br/>
                    <input type="text" name="password" placeholder="password"></input><br/>
                    <input value="Login" type="submit"></input>
                </form>
                </center>
            </div>
        );
    }
}

export default Login;