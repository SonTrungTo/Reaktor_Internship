import React from "react";
import { makeStyles } from "@material-ui/core";

import theme from "../theme";

const styles = makeStyles(() => ({
    text: {
        color: theme.colors.primary,
        textAlign: 'center'
    }
}));

// const stylesText = {
//     color: theme.colors.primary
// };

export const FacemasksList: React.FC = () => {
    const stylesText = styles();
    return (
        <div id="text" className={stylesText.text}>
            This is the product list
        </div>
    );
};

export default FacemasksList;