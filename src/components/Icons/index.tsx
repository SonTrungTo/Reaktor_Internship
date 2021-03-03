import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadSideMask,
    faMitten, faHatWizard, faCircle } from "@fortawesome/free-solid-svg-icons";

import { Availability } from "../../types";
import { assertNever } from "../../utils";

export const FacemaskIcon: React.FC<{ availability: Availability }>
= ({ availability }) => {
    switch (availability) {
        case 'INSTOCK':
            return <FontAwesomeIcon icon={faHeadSideMask} color="green" size="lg" />;
    
        case 'OUTOFSTOCK':
            return <FontAwesomeIcon icon={faHeadSideMask} color="red" size="lg" />;

        case 'LESSTHAN10':
            return <FontAwesomeIcon icon={faHeadSideMask} color="yellow" size="lg" />;

        default:
            return assertNever(availability);
    }
};

export const BeanieIcon: React.FC<{ availability: Availability }>
= ({ availability }) => {
    switch (availability) {
        case 'INSTOCK':
            return <FontAwesomeIcon icon={faHatWizard} color="green" size="lg" />;
    
        case 'OUTOFSTOCK':
            return <FontAwesomeIcon icon={faHatWizard} color="red" size="lg" />;

        case 'LESSTHAN10':
            return <FontAwesomeIcon icon={faHatWizard} color="yellow" size="lg" />;

        default:
            return assertNever(availability);
    }
};

export const GlovesIcon: React.FC<{ availability: Availability }>
= ({ availability }) => {
    switch (availability) {
        case 'INSTOCK':
            return <FontAwesomeIcon icon={faMitten} color="green" size="lg" />;
    
        case 'OUTOFSTOCK':
            return <FontAwesomeIcon icon={faMitten} color="red" size="lg" />;

        case 'LESSTHAN10':
            return <FontAwesomeIcon icon={faMitten} color="yellow" size="lg" />;

        default:
            return assertNever(availability);
    }
};

export const CircleIcon: React.FC<{ color: string, style?: string, id?: string }>
= ({ color, style, id }) => <FontAwesomeIcon id={id}
icon={faCircle} color={color} size="sm" className={style} />;