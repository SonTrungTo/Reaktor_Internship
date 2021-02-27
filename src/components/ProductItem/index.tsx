import React from "react";
import { makeStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";

import theme from "../theme";
import Text from "../Text";
import { AllProducts } from "../../types";
import { FacemaskIcon,
    BeanieIcon, GlovesIcon, CircleIcon } from "../Icons";
import { assertNever } from "../../utils";

const useStyles = makeStyles(() => ({
    card: {
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
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
= ({ name, color, price, manufacturer, type }) => {
    const styles = useStyles();

    const renderIcon = (type: AllProducts["type"]) => {
        switch (type) {
            case 'facemasks':
                return <FacemaskIcon available={true} />;
            
            case 'beanies':
                return <BeanieIcon available={true} />;
    
            case 'gloves':
                return <GlovesIcon available={true} />;
        
            default:
                return assertNever(type);
        }
    };

    return (
        <Card className={styles.card} elevation={4}>
            <CardHeader
            avatar={
                <Avatar
                aria-label="Type Icon"
                className={styles.avatar} >
                    { renderIcon(type) }
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