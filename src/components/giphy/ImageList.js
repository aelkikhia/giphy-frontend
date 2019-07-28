import React, {Component} from 'react';
import  { connect } from "react-redux";
// import {fetchGiphyImages} from "../../actions";

// import ImageItem from './ImageItem';

class ImageList extends Component {

    saveList = url => {
        console.log('ouch');
        let savedItemsArr = JSON.parse(localStorage.getItem("savedItems")) || [];
        // debugger
        if (savedItemsArr.indexOf(url) === -1) {
            savedItemsArr.push(url);
            localStorage.setItem("savedItems", JSON.stringify(savedItemsArr));
            // this.props.dispatch(updateMenu());
        }
    };

    renderList() {
        let images = this.props.giphy.images.data;
        return images.map(e => {
            return (
                <li key={e.id} className="list" onClick={() =>this.saveList(e.images.original.webp)}>
                    <img src={e.images.fixed_width_small.webp} alt="" />
                </li>
            );
        });
    };

    render() {
        if (this.props.giphy.loading) {
            return <div>Loading</div>
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

export default connect(mapStateToProps)(ImageList);