import React from "react";

import ProductItem from "../ProductItem";
import useProducts from "../../hooks/useProducts";

export const GlovesList: React.FC = () => {
    const { products } = useProducts('gloves');

    const productsList = products ? products
        : [];

    return (
        <div id="text">
            { productsList.map(product =>
            <ProductItem key={product.id} {...product} />) }
        </div>
    );
};

export default GlovesList;