import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Grid, Container } from "@material-ui/core";

import FacemasksList from "./components/FacemasksList";
import BeaniesList from "./components/BeaniesList";
import GlovesList from "./components/GlovesList";
import AppBar from "./components/AppBar";
import NavigationMenu from "./components/NavigationMenu";


const MainRouter: React.FC = () => {
    return (
        <div>
            <AppBar />
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <NavigationMenu />
                    </Grid>
                    <Grid item xs={8}>
                        <Switch>
                            <Route path="/products/facemasks"
                            exact component={FacemasksList} />
                            <Route path="/products/beanies"
                            exact component={BeaniesList} />
                            <Route path="/products/gloves"
                            exact component={GlovesList} />
                            <Redirect to="/products/facemasks" />
                        </Switch>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default MainRouter;