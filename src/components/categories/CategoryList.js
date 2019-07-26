import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories, selectCategory } from "../../actions";

class BoardList extends React.Component {

    componentDidMount() {
        this.props.fetchCategories();
    }

    renderBoardButtons() {
        return this.props.categoryList.map( board => {
            return (
                <button
                    key={board.id}
                    className="ui button"
                    onClick={() => this.props.selectCategory(board.name)}
                >
                    {board.name}
                </button>
            );
        });
    }

    renderList() {
        if(!this.props.categoryList) {
            return <div>Loading...</div>
        }

        return <div className="ui buttons">{this.renderBoardButtons()}</div>

    }

    render() {
        return (
            <div>
                <h2>Categories</h2>
                <div>{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categoryList: Object.values(state.categories.list),
    }
};

export default connect(mapStateToProps, {fetchCategories, selectCategory})(BoardList);