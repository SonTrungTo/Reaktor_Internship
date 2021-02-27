import React from "react";
import { makeStyles } from "@material-ui/core";
import { useParams, Redirect } from "react-router-dom";

import { AllProducts } from "../../types";
import ProductItem from "../ProductItem";
import useProducts from "../../hooks/useProducts";

const useStyles = makeStyles(() => ({
    container: {
        flexDirection: 'row'
    }
}));

export const ProductList: React.FC = () => {
    const styles = useStyles();
    const { type } = useParams<{ type: AllProducts["type"] }>();
    const { products } = useProducts(type);

    if (!products) {
        return <Redirect to="/products" />;
    }

    return (
        <div id="text" className={styles.container}>
            { products.map(product =>
            <ProductItem key={product.id} {...product} />) }
        </div>
    );
};

export default ProductList;