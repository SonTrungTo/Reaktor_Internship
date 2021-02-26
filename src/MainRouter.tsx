import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductsList";

const MainRouter: React.FC = () => {
    return (
        <div>
            Reaktor Internship
            <Switch>
                <Route path="/" exact component={ProductList} />
            </Switch>
        </div>
    );
};

export default MainRouter;