import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Registration from './Registration/Registration';
import LoginForm from './Login/Login';

export const App = () => {
    return (
        <Routes>
                <Route path="/registration">
                    <Registration />
                </Route>
                <Route path="/login">
                    <LoginForm/>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
          
        </Routes>
    );
};

export default App;