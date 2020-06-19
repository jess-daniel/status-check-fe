import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Landing from './components/pages/Landing';
import './App.css';
import Custom404 from './components/pages/Custom404';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route>
            <Custom404 />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
