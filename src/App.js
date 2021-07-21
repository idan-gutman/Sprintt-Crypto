import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="content-wrapper">
      <Switch>
        <Route path="/" component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;
