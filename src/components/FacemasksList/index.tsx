import React from "react";

import ProductItem from "../ProductItem";
import useProducts from "../../hooks/useProducts";

export const FacemasksList: React.FC = () => {
    const { products } = useProducts('facemasks');

    const productsList = products ? products
    : [];

    return (
        <div>
            { productsList.map(product =>
            <ProductItem key={product.id} {...product} />) }
        </div>
    );
};

export default FacemasksList;