import React, { Component } from 'react';

import Navbar from './Navbar';
import SearchBar from './SearchBar';
import unsplash from '../API/unsplash';

class App extends Component {

    state = {
        images: []
    };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        this.setState({
            images: response.data.results
        });
    };

    render() {
        return (
            <div style={{ background: '#FFFFFF', height: '100vh' }}>
                <Navbar />
                <div className="ui container">
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    Found: {this.state.images.length} images
                    <a className="github" href="https://github.com/tyrion404"><img alt="GitHub" src="images/git.png" height="24px" width="24px" /></a>
                </div>
            </div>
        );
    }
}

export default App;