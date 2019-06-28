import React, {Component} from 'react';
import {HashRouter as Router, Route, NavLink} from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Factorial from "./pages/Factorial";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            isSignedIn: false
        }
    }

  handleSignIn = (value) => {
      this.setState(value);
  };

  handleSignOut = () => {
      this.setState({
          email: '',
          name: '',
          isSignedIn: false
      });
  };

    render() {
      let render = '';
      if(this.state.isSignedIn){
        render = (
            <div className="App__Form">
              <div className="PageSwitcher">

                <NavLink to="/" activeClassName="PageSwitcher__Item--Active"
                         className="PageSwitcher__Item" onClick={this.handleSignOut}>Sign Out</NavLink>
              </div>
              <Factorial userName={this.state.name} />

            </div>
        )
      }else {
        render = (
            <div className="App__Form">

              <div className="PageSwitcher">

                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active"
                         className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active"
                         className="PageSwitcher__Item">Sign Up</NavLink>
              </div>

              <div className="FormTitle">
                <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active"
                         className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/"
                                                                                   activeClassName="FormTitle__Link--Active"
                                                                                   className="FormTitle__Link">Sign
                Up</NavLink>
              </div>

              <Route exact path="/" component={() => <SignUpForm loggedIn={this.handleSignIn} />}>
              </Route>
              <Route path="/sign-in" component={() => <SignInForm loggedIn={this.handleSignIn} />}>
              </Route>
            </div>
        )
      }
        return (
            <Router basename="/">
                <div className="App">

                  {render}
                </div>
            </Router>
        );
    }
}

export default App;
