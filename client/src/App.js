import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Nav />
        <Switch>
        <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;

