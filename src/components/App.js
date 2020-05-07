import React, { Component } from 'react';

import unsplash from '../API/unsplash';
import Navbar from './Navbar/Navbar';
import SearchBar from './SearchBar/SearchBar';
import ImageList from './ImageList/ImageList';

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
            <div style={{ background: '#FFFFFF' }}>
                <Navbar />
                <div className="ui container">
                    <SearchBar onSubmit={this.onSearchSubmit} />
                    <ImageList images={this.state.images} />
                </div>
            </div>
        );
    }
}

export default App;