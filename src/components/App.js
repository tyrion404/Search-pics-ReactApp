import React, { Component } from 'react';

import Navbar from './Navbar';
import SearchBar from './SearchBar';
// import Header from './SearchBar';

class App extends Component {
    render() {
        return (
            <div style={{ background: '#FFFFFF', height: '100vh' }}>
                <Navbar />
                <div className="ui container">
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default App;