import React from "react";

import { AllProducts } from "../../types";
import { FacemaskIcon,
    BeanieIcon, GlovesIcon } from "../Icons";
import Text from "../Text";

import { assertNever } from "../../utils";
import useAvailability from "../../hooks/useAvailability";

const AvailabilityIcon: React.FC<
    {
        type: AllProducts["type"],
        manufacturer: AllProducts["manufacturer"],
        id: AllProducts["id"]
    }
>
= ({ type, manufacturer, id }) => {
    const { availability } = useAvailability(manufacturer, id);

    if (!availability) {
        return (
            <Text fontWeight="bold">
                Error
            </Text>
        );
    }

    switch (type) {
        case 'facemasks':
            return <FacemaskIcon availability={availability} />;
        
        case 'beanies':
            return <BeanieIcon availability={availability} />;

        case 'gloves':
            return <GlovesIcon availability={availability} />;
    
        default:
            return assertNever(type);
    }
};

export default AvailabilityIcon;