import React from "react";
import LinkButton from "../LinkButton";
import { makeStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";

import Text from "../Text";
import theme from "../theme";

const useStyles = makeStyles(() => ({
    container: {
        flexDirection: 'column',
        top: 60,
        position: 'sticky'
    },
    isActive: {
        backgroundColor: theme.colors.primary
    }
}));

const NavigationMenu
= withRouter(({ history }) => {
    const styles = useStyles();
    const isActive = (pathname: string) => {
        if (history.location.pathname === pathname) {
            return styles.isActive;
        } else {
            return "";
        }
    };

    return (
        <div className={styles.container}>
            <LinkButton to="/products/facemasks"
            style={isActive('/products/facemasks')}>
                <Text
                color="textBar">
                    Facemasks
                </Text>
            </LinkButton>
            <LinkButton to="/products/beanies"
            style={isActive('/products/beanies')}>
                <Text
                color="textBar">
                    Beanies
                </Text>
            </LinkButton>
            <LinkButton to="/products/gloves"
            style={isActive('/products/gloves')}>
                <Text
                color="textBar">
                    Gloves
                </Text>
            </LinkButton>
        </div>
    );
});

export default NavigationMenu;