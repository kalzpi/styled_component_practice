import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyles from "./components/GlobalStyles";
import Responsive from "./Routes/Responsive";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Responsive} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
