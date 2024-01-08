import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/registration">Реєстрація</Link>
                    </li>
                    <li>
                        <Link to="/login">Логін</Link>
                    </li>
                </ul>
            </nav>
            <h1>Long Web</h1>
        </div>
    );
};

export default Home;