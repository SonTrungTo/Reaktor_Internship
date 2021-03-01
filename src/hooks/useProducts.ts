import { useState, useEffect } from "react";
import productsServices from "../services/productsServices";

import { AllProducts } from "../types";

const useProducts = (type: AllProducts["type"]) => {
    const [products, setProducts] = useState<AllProducts[] | undefined>(undefined);

    useEffect(() => {
        productsServices.getAll(type)
        .then(data => {
            setProducts(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return {
        products
    };
};

export default useProducts;