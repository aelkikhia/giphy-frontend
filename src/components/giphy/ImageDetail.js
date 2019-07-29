import React from 'react';
import {connect} from "react-redux";
import ImageOptions from './ImageOptions'

class ImageDetail extends React.Component {

    render() {
        const {selected} = this.props.giphy;
        if (!selected) {
            return <div> </div>
        }
        return (
            <div>
                <div className="ui">
                    <img title="image view" alt='' src={selected.images.original.url} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{selected.title}</h4>
                    <ImageOptions/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        giphy: state.giphy,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps)(ImageDetail);