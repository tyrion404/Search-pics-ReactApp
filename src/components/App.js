import React, { Component } from 'react';

import Navbar from './Navbar';
import SearchBar from './SearchBar';
// import Header from './SearchBar';

class App extends Component {
    onSearchSubmit = (term) => {
        console.log(term);
    };

    render() {
        return (
            <div style={{ background: '#FFFFFF', height: '100vh' }}>
                <Navbar />
                <div className="ui container">
                    <SearchBar onSubmit={this.onSearchSubmit} />
                </div>
            </div>
        );
    }
}

export default App;