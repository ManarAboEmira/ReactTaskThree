import React, { Component } from 'react';
import Signup from './SignUp'; 
import Login from './logIn';   

class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignup: true 
        };
    }

    toggleAuthComponent = () => {
        this.setState(prevState => ({
            isSignup: !prevState.isSignup
        }));
    }

    render() {
        const { isSignup } = this.state;

        return (
            <div>
                <button onClick={this.toggleAuthComponent}>
                    {isSignup ? "Log In" : "Sign Up"}
                </button>
                {isSignup ? <Signup /> : <Login />}
            </div>
        );
    }
}

export default AuthComponent;
