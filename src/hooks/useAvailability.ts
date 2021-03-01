import { useEffect, useState } from "react";
import availabilityServices from "../services/availabilityServices";
import { parseProductAvailability, parseManufacturerInfo } from "../utils";

import { AllProducts, Availability } from "../types";

const useAvailability
= (manufacturer: AllProducts["manufacturer"], productId: AllProducts["id"]) => {
    const [ availability, setAvailability ] = useState<Availability | undefined>(undefined);

    useEffect(() => {
        if (sessionStorage.getItem(manufacturer)) { // Fetch availability only once to increase the reloading speed
            const parsedData = JSON.parse(String(sessionStorage.getItem(manufacturer))); // eslint-disable-line
            const cachedData = parseManufacturerInfo(parsedData);
            const productAvailability = parseProductAvailability(cachedData, productId);
            setAvailability(productAvailability);
            return;
        }
        availabilityServices.getAll(manufacturer)
        .then(data => {
            const productAvailability = parseProductAvailability(data, productId);
            setAvailability(productAvailability);
            sessionStorage.setItem(manufacturer, JSON.stringify(data));
        })
        .catch(err => console.log(err));

        return () => {
            return;
        };
    }, []);

    return {
        availability
    };
};

export default useAvailability;