import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";

const App = () => {

    return (
        <div className='app'>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
