import React from 'react';
import Axios from 'axios';
import './LoginRegister.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChangeUsername = (e) => {
        this.setState({username: e.target.value})
    }

    handleChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleClick = () => {
        console.log(this.state);
        Axios.post('http://54.226.49.231:8000/user/login', this.state)
        .then(response => {
            console.log(response)
           
        })
        .catch(error => {
            console.log(error);
        });
    }


    setCookies = () => {
            
    }

    render() {
    
        return (
            <div>
                
                <form method="POST" action="http://54.226.49.231:8000/user/login">
                    <input id="username-input" type="text" onChange={this.handleChangeUsername} name="username" placeholder="username"></input><br/>
                    <input id="password-input" type="password" onChange={this.handleChangePassword} name="password" placeholder="password"></input><br/>
                    <button id="submit-btn" value="Login" type="submit" onClick={this.handleClick}>Login</button>
                </form>
                
            </div>
        );
    }
}

export default Login;