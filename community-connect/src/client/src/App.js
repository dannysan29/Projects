import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/protected" component={ProtectedPage} />
        {/* Add more protected routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;