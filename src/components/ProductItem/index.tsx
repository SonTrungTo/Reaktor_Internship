import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import theme from "../theme";
import Text from "../Text";
import AvailabilityIcon from "../AvailabilityIcon";
import { AllProducts } from "../../types";
import { CircleIcon } from "../Icons";

const useStyles = makeStyles(() => ({
    card: {
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: theme.colors.itemBackgroundColor
    },
    priceText: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15
    },
    avatar: {
        backgroundColor: theme.colors.textBar,
        borderStyle: 'solid',
        borderWidth: 1
    },
    labelText: {
        marginRight: 5
    },
    colorDistance: {
        marginLeft: 5
    }
}));

const ProductItem: React.FC<AllProducts>
= ({ id, name, color, price, manufacturer, type }) => {
    const styles = useStyles();

    return (
        <Card className={styles.card} elevation={4}>
            <CardHeader
            avatar={
                <Avatar
                aria-label="Type Icon"
                className={styles.avatar} >
                    <AvailabilityIcon type={type} manufacturer={manufacturer} id={id} />
                </Avatar>
            }
            action={
                <Text
                fontWeight="bold"
                color="textBar"
                style={ styles.priceText } >
                    { 
                    <React.Fragment>
                        <span>&euro; </span>
                        { price }
                    </React.Fragment> 
                    }
                </Text>
            }
            title={
                <Text
                fontSize="subheading"
                fontWeight="bold">
                    { name }
                </Text>
            }
            subheader={
                <Text
                color="textSecondary">
                    { manufacturer }
                </Text>
            } />
            <CardContent>
                <Text
                style={styles.labelText}>
                    Color(s):
                    <span>
                        { color
                        .map(col => <CircleIcon
                        key={col} color={col} style={styles.colorDistance} /> ) }
                    </span>
                </Text>
            </CardContent>
        </Card>
    );
};

export default ProductItem;