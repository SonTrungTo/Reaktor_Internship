import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import theme from "../theme";
import Text from "../Text";
import { AllProducts } from "../../types";

const useStyles = makeStyles(() => ({
    container: {

    }
}));

const ProductItem: React.FC<AllProducts>
= ({ id, name, color, price, manufacturer, type }) => {
    const styles = useStyles();

    return (
        <Card>
            
        </Card>
    );
};

export default ProductItem;