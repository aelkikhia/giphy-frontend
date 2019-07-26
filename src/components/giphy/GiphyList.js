import React from 'react';

import GifItem from './GiphyItem';

const GiphyList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return <GifItem
            key={video.id.videoId}
            onVideoSelect={onVideoSelect}
            video={video} />
    });

    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default GiphyList;