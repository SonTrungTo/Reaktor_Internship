import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import FacemasksList from "./components/FacemasksList";
import BeaniesList from "./components/BeaniesList";
import GlovesList from "./components/GlovesList";
import AppBar from "./components/AppBar";

const MainRouter: React.FC = () => {
    return (
        <div>
            <AppBar />
            <Switch>
                <Route path="/products/facemasks"
                exact component={FacemasksList} />
                <Route path="/products/beanies"
                exact component={BeaniesList} />
                <Route path="/products/gloves"
                exact component={GlovesList} />
                <Redirect to="/products/facemasks" />
            </Switch>
        </div>
    );
};

export default MainRouter;