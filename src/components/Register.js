import React from 'react';

class Register extends React.Component {
    render() {
        return (
            <div>
            
                <h2>Register</h2>
                <form method="POST" action="/user/register">
                    <input type="text" name="username" placeholder="username"></input><br/>
                    <input type="text" name="password" placeholder="password"></input><br/>  
                    <input value="Register" type="submit"></input>
                </form>

            </div>
        );
    }
}

export default Register;