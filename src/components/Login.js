import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
            
                <h2>Login</h2>
                <form method="POST" action="/user/login">
                    <input type="text" name="username" placeholder="username"></input><br/>
                    <input type="text" name="password" placeholder="password"></input><br/>
                    <input value="Login" type="submit"></input>
                </form>
            </div>
        );
    }
}

export default Login;