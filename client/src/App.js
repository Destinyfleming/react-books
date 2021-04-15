import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
          <div>
          <Nav />
            <Switch>
              <Route path="/saved">
              <Saved />
              </Route>

              <Route path="/search">
              <Search />
              </Route>
            </Switch>
            </div>
      </Router>
    </div>
  );
}

export default App;
