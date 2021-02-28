import React from "react";

import ProductItem from "../ProductItem";
import useProducts from "../../hooks/useProducts";

export const ProductList: React.FC = () => {
    const { products } = useProducts('beanies');

    const productsList = Array.isArray(products) ? products
        : [];

    return (
        <div id="text">
            { productsList.map(product =>
            <ProductItem key={product.id} {...product} />) }
        </div>
    );
};

export default ProductList;