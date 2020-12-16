import React from 'react';
import './Announcements.css';

class Announcements extends React.Component {
    render() {
        return (
            <div class="post-wrapper">
                <h1 className="a-title">Just Released! v.01</h1>
                <h6 className="a-date">December 16 2020</h6>
                <p className="a-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Fusce nec purus turpis. Fusce id rhoncus erat. Nam sed lorem non 
enim sodales elementum. Integer accumsan</p>
            </div>
        );
    }
}

export default Announcements;