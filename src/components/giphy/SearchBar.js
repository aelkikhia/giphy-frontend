import React from 'react';
import { connect } from "react-redux";
import { fetchGiphyImages } from "../../actions";

// TODO: make a generic component
class SearchBar extends React.Component {

    state = { term: ""};

    onInputChange = event => {
        this.setState({ term: event.target.value.trim() });
    };

    onFormSubmit = event => {
        event.preventDefault(); // prevent default form submission behavior
        // TODO: don't search on an empty string, add form validation
        if (this.state.term === "") return false;
        this.props.fetchGiphyImages(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit}
                      className="ui form">
                    <div className="field">
                        <label>Giphy Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {fetchGiphyImages})(SearchBar);