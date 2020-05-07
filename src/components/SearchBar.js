import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {

    state = {
        term: ''
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }; 

    render() {
        return (
            <div className="SearchBar">
                <form onSubmit={this.onFormSubmit}>
                    <input
                        onChange={(e) => this.setState({ term: e.target.value })}
                        value={this.state.term}
                        className="SearchBarInput"
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;