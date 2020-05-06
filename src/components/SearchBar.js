import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <form>
                    <input className="SearchBarInput" type="text" placeholder="Search" />
                </form>
            </div>
        );
    }
}

export default SearchBar;