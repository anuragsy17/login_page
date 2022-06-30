import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    state = {}
    render() {
        return (
            <>
                <div>
                    <div className='homepage_nav'>
                        <Link to='/'>Log out</Link>
                    </div>
                    <h2>welcome</h2>
                </div>
            </>
        );
    }
}

export default Home;