import React from "react";
import Home from "./pages/home";
import Store from "./pages/store";
import Upload from "./pages/upload";
import Form from "./pages/form";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Success from "./pages/success";
import OrderCompleted from "./pages/orderCompleted";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/store" component={Store} />
        <Route path="/upload" component={Upload} />
        <Route path="/form" component={Form} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/ordercompleted" component={OrderCompleted} />
        <Route path="/contact" component={Contact} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  );
};

export default App;
