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
            //window.href = 'http://54.226.49.231:8000/setcookies';
        })
        .catch(error => {
            console.log(error);
        });
    }


    sendPostData = () => {

    }

    render() {
        var yes = process.env.API_BASE_URL
        return (
            <div>
                <center>
                <h2>Login</h2>
                <form method="POST" action="http://54.226.49.231:8000/user/login">
                    <input type="text" onChange={this.handleChangeUsername} name="username" placeholder="username"></input><br/>
                    <input type="text" onChange={this.handleChangePassword} name="password" placeholder="password"></input><br/>
                    <button value="Login" type="submit" onClick={this.handleClick}>Login</button>
                </form>
                </center>
            </div>
        );
    }
}

export default Login;