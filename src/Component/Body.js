import React, { Component } from "../../node_modules/react";
import Typography from "../../node_modules/@material-ui/core/Typography";
import Container from "../../node_modules/@material-ui/core/Container";
import {
  Link,
  Switch,
  Route,
  BrowserRouter as Router,
} from "../../node_modules/react-router-dom";

import Home from "./Home";
import signUp from "./SignUp";
import signIn from "./SignIn";
class Body extends Component {
  render() {
    return (
      <Container maxWidth="15sm">
        <Typography component="div" align="center" style={{ height: "100vh" }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signUp" component={signUp} />
            <Route path="/signIn" component={signIn} />
            <Route path="/home" component={Home} />
          </Switch>
        </Typography>
      </Container>
    );
  }
}

export default Body;
