import React from 'react';
import { Consumer } from './Context'

//Component Imports
import Navigation from './Navigation/Navigation';

const App = () => {
    return (
        <Consumer>
            { context => (
                <div className="app-component">
                    <Navigation />                    
                </div>
            )}
        </Consumer>
    )
}

export default App;