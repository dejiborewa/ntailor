import React from "react";
import Home from "./pages/home";
import Store from "./pages/store";
import Upload from "./pages/upload";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </Router>
  );
};

export default App;
