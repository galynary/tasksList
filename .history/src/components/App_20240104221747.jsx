import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import Login from './components/Login';

const App = () => {
    return (
        <Routes>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
          
        </Routes>
    );
};

export default App;