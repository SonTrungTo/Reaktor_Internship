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
        } else if (localStorage.getItem(manufacturer)) { // This is because storageSession limit is only 5MB, and it's not enough
            const parsedData = JSON.parse(String(localStorage.getItem(manufacturer))); // eslint-disable-line
            const cachedData = parseManufacturerInfo(parsedData);
            const productAvailability = parseProductAvailability(cachedData, productId);
            setAvailability(productAvailability);
            return;
        }
        availabilityServices.getAll(manufacturer)
        .then(data => {
            const productAvailability = parseProductAvailability(data, productId);
            setAvailability(productAvailability);
            if (sessionStorage.length < 5) {
                sessionStorage.setItem(manufacturer, JSON.stringify(data));
            } else if (!sessionStorage.getItem(manufacturer)) {
                localStorage.clear();
                localStorage.setItem(manufacturer, JSON.stringify(data));
            }
        })
        .catch(err => console.log(err));
    }, []);

    return {
        availability
    };
};

export default useAvailability;