import React from 'react';

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
        
        return (
            
            <div>
                <h2>List of users</h2>
                <ul>
                    {this.state.userData.map(d => (<li key={d.username}>{d.username}</li>))}
                </ul>
               
            </div>
        );
    }
}

export default ViewUsers;