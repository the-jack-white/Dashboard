import React from 'react';
import { BrowserRouter } from 'react-router-dom';


//Context API
import { Consumer } from './Context';

//Component Imports
import Navigation from './Navigation/Navigation';

const App = () => {
    return (
        <BrowserRouter>
            <Consumer>
                { context => (
                    <div className="app-component">
                        <Navigation />                    
                    </div>
                )}
            </Consumer>
        </BrowserRouter>
    )
}

export default App;