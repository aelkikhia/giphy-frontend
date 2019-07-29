import React from 'react';
import ImageDetail from './ImageDetail';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

//TODO: make a function based component or genericize the child components
class ImageView extends React.Component {

    render() {
        return <div>
            <SearchBar />
            <div className="ui grid">
                <div className="ui row">
                    <div className="five wide column">
                        <ImageList />
                    </div>
                    <div className="eleven wide column">
                        <ImageDetail />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ImageView;