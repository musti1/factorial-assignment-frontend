import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from "../services/AuthService";

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    updateParent = (user) => {
        this.props.loggedIn({email: user.emailId, name: user.name, isSignedIn: true});
    };

    handleChange = (e) =>  {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = async (e) =>  {
        e.preventDefault();
        const response = await AuthService.signIn(this.state);
        const result = await response.json();
        if(result.User){
            this.updateParent(result.User);
        }
    };

    render() {
        return (
            <div  className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignInForm;
