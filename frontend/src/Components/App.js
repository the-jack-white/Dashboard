import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';


//Context API
import { Consumer } from './Context';

//Component Imports
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';

const App = () => {
    return (
        <BrowserRouter>
            <Consumer>
                { context => (
                    <div className="app-component">
                        <Route exact path='/' render={ () => 
                            <Redirect to='/home' />
                        }/>
                        <Route path='/home' component={Home} />
                        <Route path='/dashboard' component={Dashboard} />
                    </div>
                )}
            </Consumer>
        </BrowserRouter>
    )
}

export default App;