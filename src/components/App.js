import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar';
import SearchBar from './SearchBar';
// import Header from './SearchBar';

class App extends Component {
    onSearchSubmit = async (term) => {
        const images = await axios.get('https://api.unsplash.com/search/photos/', {
            params: {
                query: term
            },
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASHID}`
            }
        });
        console.log(images.data.results);
    };

    render() {
        return (
            <div style={{ background: '#FFFFFF', height: '100vh' }}>
                <Navbar />
                <div className="ui container">
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <a className="github" href="https://github.com/tyrion404"><img alt="GitHub" src="images/git.png" height="24px" width="24px" /></a>
                </div>
            </div>
        );
    }
}

export default App;