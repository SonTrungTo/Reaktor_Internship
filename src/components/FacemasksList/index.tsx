import React from "react";

//import Text from "../Text";
import ProductItem from "../ProductItem";

export const FacemasksList: React.FC = () => {
    return (
        <div id="text">
            <ProductItem type='facemasks' price={24}
            id="1"
            name="Son To"
            color={['blue', 'red', 'green']}
            manufacturer="Son To Oy" />
        </div>
    );
};

export default FacemasksList;