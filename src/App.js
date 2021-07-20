import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllCurrencies } from './pages/AllCurrencies';
// import {AppHeader } from './cmps/AppHeader'
// import { CarApp } from './pages/CarApp'
// import { CarDetails } from './pages/CarDetails'
// import { CarEdit } from './pages/CarEdit'
// import './assets/main.css'
// import './assets/style/main.scss'
// import { Home } from './pages/Home';
// import { About } from './pages/About';
import { HomePage } from './pages/HomePage';
import { TrackedCurrencies } from './pages/Tracked Currencies';

function App() {
  return (
    <div className="content-wrapper">
      <Switch>
        {/* <Route path="/car/edit/:id?" component={ CarEdit } />
        <Route path="/car/:id" component={ CarDetails } />
        <Route path="/car" component={ CarApp } />
        <Route path="/about" component={ About } /> */}
        <Route path="/" component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;
