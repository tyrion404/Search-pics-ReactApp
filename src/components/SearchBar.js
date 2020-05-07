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

    // F_-rENL8Jj6n1qsUx5utWfFZ7AtPJlQ9bosGBbfC1so
    // SEC qU10QaMPHkQUEcooSd9iR8QmTFKUkR9X6NsG1HROzaA

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