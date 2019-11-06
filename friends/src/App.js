import React from 'react';
import './App.css';
import { Link, Route, withRouter } from "react-router-dom";
import { getToken } from "./utils/api";
import PriviteRoute from "./PriviteRoute";
import Signin from "./SignIn";
import FriendsList from "./FriendsList";
import Logout from "./Logout";

function App() {

  const signedIn = getToken()

  return (
    <div className="App">
      <header className="App-header">
        <nav className="Navigation">
          <Link className="Link" to="/">Home</Link>
          {!signedIn && <Link className="Link" to="/signin">Sign In</Link>}
          {signedIn && <Link className="Link" to="/friendslist">Friends List</Link>}
          {signedIn && <Link className="Link" to="/logout">Log Out</Link>}
        </nav>

        <Route exact path="/signin" component={Signin} />
        <PriviteRoute exact path="/friendslist" component={FriendsList}/>
        <PriviteRoute exact path="/logout" component={Logout}/>
      </header>
    </div>
  );
}

export default withRouter(App);
