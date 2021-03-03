import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

import theme from "./theme";

const useStyles = makeStyles(() => ({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorTextBar: {
        color: theme.colors.textBar
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading
    }
}));

const Text: React.FC<{ fontWeight?: string, color?: string, fontSize?: string,
style?: string, id?: string }>
= ({ fontWeight, color, fontSize, style, ...props }) => {
    const styles = useStyles();
    const normalStyle = styles.text;
    const fontWeightBoldStyle =
        fontWeight === "bold" ? styles.fontWeightBold : "";
    const colorTextSecondaryStyle =
        color === "textSecondary" ? styles.colorTextSecondary : "";
    const colorPrimaryStyle =
        color === "primary" ? styles.colorPrimary : "";
    const colorTextBarStyle =
        color === "textBar" ? styles.colorTextBar : "";
    const fontSizeSubheadingStyle =
        fontSize === "subheading" ? styles.fontSizeSubheading : "";
    const extraStyles = style !== undefined ? style : "";
    
    return <Typography className={
        ` ${normalStyle} ${fontWeightBoldStyle} ` +
        ` ${colorPrimaryStyle} ${colorTextSecondaryStyle} ` +
        ` ${colorTextBarStyle} ${fontSizeSubheadingStyle} ${extraStyles} `
    } {...props} />;
};

export default Text;