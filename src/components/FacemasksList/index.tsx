import React, { useState, useEffect } from "react";
import productsServices from "../../services/productsServices";

import { AllProducts } from "../../types";
import ProductItem from "../ProductItem";

export const FacemasksList: React.FC = () => {
    const [facemasks, setFacemasks] = useState<AllProducts[]>([]);

    useEffect(() => {
        productsServices.getAll('facemasks')
        .then(data => {
            setFacemasks(data);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div id="text">
            { facemasks.map(facemask =>
            <ProductItem key={facemask.id} {...facemask} />) }
        </div>
    );
};

export default FacemasksList;