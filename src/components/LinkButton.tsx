import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import theme from "./theme";

const useStyles = makeStyles(() => ({
    linkButton: {

    }
}));

const LinkButton: React.FC<{ to: string, style?: string }>
= ({ to, style }) => {
    
};

export default LinkButton;