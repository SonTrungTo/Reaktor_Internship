/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Availability, ManufacturerInfo, AllProducts, Response } from "./types";

export const assertNever = (value: never): never => {
    throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
};

const parseAvailabilityString = (data: string | undefined): Availability => {
    if (!data || !isAvailability(data)) {
        throw new Error(`Invalid stock value: undefined or ${data ? data : "else"}`);
    }

    return data;
};

const isAvailability = (value: string | undefined): value is Availability => {
    return value === 'INSTOCK' || value === 'OUTOFSTOCK' || value === 'LESSTHAN10';
};

export const parseManufacturerInfo = (value: any | null): ManufacturerInfo => {
    return {
        code: parseNumber(value.code),
        response: parseResponseArray(value.response)
    };
};

const parseResponseArray = (value: any | null): Response[] => {
    if (!value || !Array.isArray(value)) {
        throw new Error(`Invalid response array of any`);
    }
    const newValues = value.map(val => parseResponse(val));
    return newValues;
};

const parseResponse = (value: any | null): Response => {
    return {
        id: parseString(value.id),
        DATAPAYLOAD: parseString(value.DATAPAYLOAD)
    };
};

const parseString = (value: any | null): string => {
    if (!value || !isString(value)) {
        throw new Error(`Invalid string type: ${value}`);
    }

    return value;
};

const parseNumber = (value: any | null): number => {
    if (!value || !isNumber(value)) {
        throw new Error(`Invalid number type: ${value}`);
    }

    return value;
};

const isNumber = (value: any | null): value is number => {
    return typeof value === "number" || value instanceof Number;
};

const isString = (value: any | null): value is string => {
    return typeof value === "string" || value instanceof String;
};

export const parseProductAvailability = (data: ManufacturerInfo, productId: AllProducts["id"]): Availability => {
    console.log(data);
    // Fetching product list of a manufacturer
    const manufacturerList = data ?
        data.response
        : undefined;
    // Finding the appropriate product in the list
    const productData = manufacturerList ?
        manufacturerList.find(product => productId.toLowerCase() === product.id.toLowerCase())
        : undefined;
    console.log(productData);
    // Splitting the string in the DATAPAYLOAD for the next step
    const productInStockValue = productData ?
        productData.DATAPAYLOAD.split("\n  ") : undefined;
    console.log(productInStockValue);
    // Applying appropriate methods to retrieve the necessary info for availability
    const productAvailability = productInStockValue ?
        productInStockValue[2]
        .slice("<INSTOCKVALUE>".length, productInStockValue[2].length - "</INSTOCKVALUE>\n</AVAILABILITY>".length)
        : undefined;
    console.log(productAvailability);
    
    return parseAvailabilityString(productAvailability);
};