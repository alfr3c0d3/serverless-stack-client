import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';
import Home from './containers/Home';
import Login from './containers/Login';
import NewNote from './containers/NewNote';
import Notes from './containers/Notes';
import NotFound from './containers/NotFound';
import Settings from './containers/Settings';
import Signup from './containers/Signup';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
        <UnauthenticatedRoute exact path="/login">
          <Login />
        </UnauthenticatedRoute>
        <UnauthenticatedRoute exact path="/signup">
          <Signup />
        </UnauthenticatedRoute>
        <AuthenticatedRoute exact path="/notes/new">
          <NewNote />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/notes/:id">
          <Notes />
        </AuthenticatedRoute>
        <AuthenticatedRoute exact path="/settings">
          <Settings />
        </AuthenticatedRoute>
      </Switch>
    </div>
  );
};
