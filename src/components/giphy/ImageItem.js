import './ImageItem.css';

import React from 'react';

const ImageItem = ({image, onVideoSelect}) => {

    return (
        <div onClick={() => {onVideoSelect(image)} } className="item">
            <img
                alt={image.snippet.title}
                className="ui image"
                src={image.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{image.snippet.title}</div>
            </div>
        </div>
    );
};

export default ImageItem;