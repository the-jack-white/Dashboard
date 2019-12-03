import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


//Context API
import { Consumer } from './Context';

//Component Imports
import Navigation from './Navigation/Navigation';
import Home from './Home/Home';

const App = () => {
    return (
        <BrowserRouter>
            <Consumer>
                { context => (
                    <div className="app-component">
                        <Navigation />

                        <Route exact path='/' render={ () => 
                            <Redirect to='/home' />
                        }/>
                        <Route path='/home' component={Home} />
                    </div>
                )}
            </Consumer>
        </BrowserRouter>
    )
}

export default App;