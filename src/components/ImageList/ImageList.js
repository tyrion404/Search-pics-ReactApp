import React, { Component } from 'react';

import ImageCard from './ImageCard/ImageCard';
import './ImageList.css';

class ImageList extends Component {
    render() {
        const Images = this.props.images.map((image) => {
            return <ImageCard key={image.id} image={image}/>
        });
        return (
            <div className="image-list">
                {Images}
            </div>
        )
    }
}

export default ImageList;