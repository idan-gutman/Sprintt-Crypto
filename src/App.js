import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CoinsDetails } from './pages/CoinsDetailes';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="content-wrapper">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home/all" /> : <HomePage />
        </Route >
        <Route path="/details/:id" component={CoinsDetails} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
