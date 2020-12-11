import React from 'react';
import './ViewUsers.css';
class ViewUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userData: [
                {

                }
            ]
            
        }

        this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
        this.fetchData();
    }
    
    fetchData() {
        fetch('http://localhost:8000/users',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
        .then(response => response.json())
        .then(json => {
            this.setState({userData: json})
            console.log(this.state.userData);
            
        });

      //  this.setState({userData: "Harmssa"})
    }



    render() {
        const users = this.state.userData.map(d => ( d.online ? <li key={d.username}>{d.username}</li> : <p></p>));
        
        return (
            
            <div>
                <h3>Users Currently Online</h3>
                <ul>
            
                <center>{users}</center>
                    
                </ul>
               
            </div>
        );
    }
}

export default ViewUsers;