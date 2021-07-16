import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import {AppHeader } from './cmps/AppHeader'
// import { CarApp } from './pages/CarApp'
// import { CarDetails } from './pages/CarDetails'
// import { CarEdit } from './pages/CarEdit'
// import './assets/main.css'
// import './assets/style/main.scss'
// import { Home } from './pages/Home';
// import { About } from './pages/About';
import { DesktopScreen } from './pages/DesktopScreen';

function App() {
  return (
    <div className="content-wrapper">
      {/* <AppHeader/> */}
      <Switch>
        {/* <Route path="/car/edit/:id?" component={ CarEdit } />
        <Route path="/car/:id" component={ CarDetails } />
        <Route path="/car" component={ CarApp } />
        <Route path="/about" component={ About } /> */}
        <Route path="/" component={ DesktopScreen } />
      </Switch>
    </div>
  );
}

export default App;
