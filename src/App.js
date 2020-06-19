import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import LoginPage from './pages/LoginPage';
import Custom404 from './pages/Custom404';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
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
