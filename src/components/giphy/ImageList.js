import React, {Component} from 'react';
import  { connect } from "react-redux";
import {selectedImage} from "../../actions";

class ImageList extends Component {

    renderList() {
        let image_data = this.props.giphy.images.data;
        return image_data.map(image => {
            return (
                <li key={image.id} className="list" onClick={() =>this.props.selectedImage(image)}>
                    <img src={image.images.fixed_width_small.url} alt="" />

                </li>
            );
        });
    };

    render() {
        if (this.props.giphy.loading) {
            return <div>Loading...</div>
        }
        if (this.props.giphy.error) {
            return <div>Error</div>
        }
        if (!this.props.giphy.images.data) {
            return <div>Search for something new</div>
        }
        return (
            <div className="results">
                <ul>{this.renderList()}</ul>
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

export default connect(mapStateToProps, {selectedImage})(ImageList);