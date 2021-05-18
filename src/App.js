import React, { useState } from "react";
import Home from "./pages/home";
import Store from "./pages/store";
import Upload from "./pages/upload";
import Form from "./pages/form";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Success from "./pages/success";
import OrderCompleted from "./pages/orderCompleted";
import Measurements from "./pages/measurements";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [selection, setSelection] = useState({
    fabric: {
      asoEbi: false,
      fila: false,
    },
    styles: {
      agbada: false,
      bubaAndSokoto: false,
      dansiki: false,
    },
    caps: {
      abetiAja: false,
      awolowo: false,
      gobi: false,
    },
  });
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/store"
          render={(props) => (
            <Store
              {...props}
              selection={selection}
              setSelection={setSelection}
            />
          )}
        />
        <Route path="/upload" component={Upload} />
        <Route
          path="/form"
          render={(props) => <Form {...props} selection={selection} />}
        />
        <Route
          path="/checkout"
          render={(props) => <Checkout {...props} selection={selection} />}
        />
        <Route path="/ordercompleted" component={OrderCompleted} />
        <Route path="/contact" component={Contact} />
        <Route path="/success" component={Success} />
        <Route path="/measurements" component={Measurements} />
      </Switch>
    </Router>
  );
};

export default App;
