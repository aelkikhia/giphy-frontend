import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from '../history';
import CategoryView from "./categories/CategoryView";
import ImageView from "./giphy/ImageView";


const App = () => {
    return (
        <div className="ui container">

            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/category" exact component={CategoryView} />
                        <Route path="/giphy" exact component={ImageView} />
                    </Switch>
                </div>
            </Router>
        </div>);
};

export default App;