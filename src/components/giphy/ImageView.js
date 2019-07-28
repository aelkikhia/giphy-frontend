import React from 'react';

import ImageDetail from './ImageDetail';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class ImageView extends React.Component {



    render() {
        return <div>
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    {/*<div className="eleven wide column">*/}
                        {/*<ImageDetail image={this.state.selectedImage} />*/}
                    {/*</div>*/}
                    <div className="five wide column">
                        <ImageList />
                            {/*onImageSelect={this.onImageSelect}*/}
                            {/*images={ this.state.images }/>*/}
                    </div>
                </div>
            </div>
        </div>

    }
}

export default (ImageView);