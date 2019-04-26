import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Search} />
//           <Route exact path="/books" component={Books} />
//           <Route exact path="/books/:id" component={Detail} />
//           <Route component={NoMatch} />
//           <Route exact path="/search" component={Search} />
//           <Route path="/saved" component={Saved} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
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

