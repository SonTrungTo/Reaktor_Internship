import React from "react";

import { makeStyles } from "@material-ui/core";
import Text from "../Text";
import theme from "../theme";

const useStyles = makeStyles(() => ({
    appBar: {
        backgroundColor: theme.colors.appBackgroundColor,
        padding: 15,
        marginBottom: 15
    }
}));

const AppBar: React.FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.appBar}>
            <Text
            color="textBar"
            fontSize="subheading">
                Reaktor Internship Problem
            </Text>
        </div>
    );
};

export default AppBar;