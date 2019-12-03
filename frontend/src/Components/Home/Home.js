import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';

import './Home.css';

const Home = () => {
    return (
        <Jumbotron className="home-component">
            <div className="button-container">
                <Button className="button" variant="primary">Sign Up</Button>
                <Button className="button" variant="outline-primary" as={Link} to='/dashboard'>Login</Button>
            </div>
        </Jumbotron>
    )
}

export default Home;