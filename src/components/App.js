import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import history from '../history';


const App = () => {
    return (
        <div className="ui container">

            <Router history={history}>
                <div>
                    <Header/>
                    <Switch>
                        {/*<Route path="/giphys" exact component={ArrayDiff} />*/}
                        {/*<Route path="/social" exact component={SocialNetwork} />*/}
                    </Switch>
                </div>
            </Router>
        </div>);
};

export default App;