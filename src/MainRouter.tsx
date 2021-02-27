import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ProductList from "./components/ProductList";
import AppBar from "./components/AppBar";

const MainRouter: React.FC = () => {
    return (
        <div>
            <AppBar />
            <Switch>
                <Route path="/products/:type"
                exact component={ProductList} />
                <Redirect to="/products/facemasks" />
            </Switch>
        </div>
    );
};

export default MainRouter;