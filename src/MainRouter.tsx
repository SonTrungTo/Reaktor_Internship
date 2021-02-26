import React from "react";
import { Route, Switch } from "react-router-dom";
import FacemasksList from "./components/FacemasksList";

const MainRouter: React.FC = () => {
    return (
        <div>
            Reaktor Internship
            <Switch>
                <Route path="/" exact component={FacemasksList} />
            </Switch>
        </div>
    );
};

export default MainRouter;