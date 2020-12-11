import React from 'react';
import './LoginRegister.css';
class Register extends React.Component {
    render() {
        return (
            <div>
               <center>
                <h2>Register</h2>
                    <form method="POST" action="/user/register">
                        <input type="text" name="username" placeholder="username"></input><br/>
                        <input type="text" name="password" placeholder="password"></input><br/>  
                        <input value="Register" type="submit"></input>
                    </form>
               </center>
            </div>
        );
    }
}

export default Register;