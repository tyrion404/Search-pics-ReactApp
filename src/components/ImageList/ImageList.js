import React, { Component } from 'react';

class ImageList extends Component {
    render() {
        const Images = this.props.images.map(({ description, id, urls }) => {
            return <img alt={description} key={id} src={urls.regular} height="300px" width="auto" />
        });
        return (
            <div>
                {Images}
            </div>
        )
    }
}

export default ImageList;