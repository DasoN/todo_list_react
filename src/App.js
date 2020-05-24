import React from 'react';
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";

import Header from './component/header'
import Main from './component/main'
import Auth from './component/auth'
import Registration from './component/registration'

function App() {

  return (
    <Router>
      <Header />
      <div className="container">
          <Route exact path="/">
              <Main />
          </Route>
          <Route path="/auth">
              <Auth />
          </Route>
          <Route path="/register">
              <Registration />
          </Route>
      </div>

    </Router>
  );
}

export default App;
