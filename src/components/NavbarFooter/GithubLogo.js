import React, { Component } from 'react';
import './GithubLogo.css';

class ImageList extends Component {
    render() {
        return (
            <a className="github" href="https://github.com/tyrion404"><img alt="GitHub" src="images/git.png" height="24px" width="24px" /></a>
        )
    }
}

export default ImageList;