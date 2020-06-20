import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import LoginPage from './pages/LoginPage';
import Custom404 from './pages/Custom404';
import Dashboard from './pages/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          {/* TODO: Profile component */}
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
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
