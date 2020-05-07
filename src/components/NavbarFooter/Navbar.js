import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <header>
                <div className="ui container">
                    <a className="logo" href="/">Search Image</a>
                    <input id="nav" type="checkbox" />
                    <label htmlFor="nav"></label>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;