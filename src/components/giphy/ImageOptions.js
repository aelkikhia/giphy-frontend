import React from 'react';
import {connect} from 'react-redux';
import {toggleLikeImage} from "../../actions";

class ImageOptions extends React.Component {

    toggleLikeOnClick = () => {
        this.image.toggleLikeImage(this.props.giphy.selected.id);
    };

    renderLikeButton() {

        if(this.props.isLiked) {
            return (
                <button onClick={this.toggleLikeOnClick} className="ui button">
                    <i className="heart icon" />
                </button>
            );
        }
        else {
            return (
                <i onClick={this.toggleLikeOnClick} className="heart outline icon" />
            );
        }
    }



    render () {
        return <div>{this.renderLikeButton()}</div>
    }
}


const mapStateToProps = (state) => {
    return {
        isLiked: state.giphy,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, {toggleLikeImage})(ImageOptions);
