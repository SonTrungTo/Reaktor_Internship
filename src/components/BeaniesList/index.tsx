import React from "react";

import ProductItem from "../ProductItem";
import useProducts from "../../hooks/useProducts";

export const BeaniesList: React.FC = () => {
    const { products } = useProducts('beanies');

    const productsList = products ? products
        : [];

    return (
        <div>
            { productsList.map(product =>
            <ProductItem key={product.id} {...product} />) }
        </div>
    );
};

export default BeaniesList;