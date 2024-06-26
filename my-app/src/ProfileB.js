import './Profile.css';
import React, { Component } from 'react';

// This example uses an ES6 class to define a component:
class ProfileB extends Component {
    render() {
        const altValue = "An animal";

        return (
            <div>
                <div>Animal name: {this.props.name}</div>
                <img
                    className="animal-pic"
                    src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    alt={altValue}
                />
            </div >
        )
    }
}

export default ProfileB;