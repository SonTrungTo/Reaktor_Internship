import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import theme from "./theme";

const useStyles = makeStyles(() => ({
    linkButton: {
        backgroundColor: theme.colors.inactiveButton,
        '&:hover': {
            backgroundColor: theme.colors.primary
        },
        width: '100%',
        marginBottom: 15,
        marginLeft: 10
    },
    link: {
        textDecoration: 'none'
    }
}));

const LinkButton: React.FC<{ to: string, style?: string, children: JSX.Element }>
= ({ to, style, children }) => {
    const styles = useStyles();
    const normalStyles = styles.linkButton;
    const extraStyles = style ? style : "";

    return (
        <Link to={to} className={styles.link}>
            <Button className={ `${normalStyles} ${extraStyles}` }
            variant="contained">
                {children}
            </Button>
        </Link>
    );
};

export default LinkButton;