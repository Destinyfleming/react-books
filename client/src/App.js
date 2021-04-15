import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Router>
          <div>
         <Nav/>
            <Switch>
              <Route path="/saved">
              <Saved />
              </Route>

              <Route path="/">
              <Search />
              </Route>
            </Switch>
            </div>
      </Router>
    </div>
  );
}

export default App;
