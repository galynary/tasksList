import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;