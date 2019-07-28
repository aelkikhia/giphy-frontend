import React from 'react';
import {connect} from "react-redux";

const ImageDetail = ({ image }) => {
    if (!image) {
        return <div></div>
    }

    const imageSrc = `https://www.youtube.com/embed/${image.id.imageId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="image view" src={imageSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{image.snippet.title}</h4>
                <p>{image.snippet.description}</p>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        giphy: state.giphy,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps)(ImageDetail);