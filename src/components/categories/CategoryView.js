import React from 'react';
import CategoryList from './CategoryList';


const CategoryView = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <CategoryList />
            </div>
        </div>
    );
};

export default CategoryView;