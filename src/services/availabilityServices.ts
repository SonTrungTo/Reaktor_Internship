import axios from "axios";
import { AllProducts, ManufacturerInfo } from "../types";

const baseUrl = '/v2/availability';

const getAll
= async (manufacturer: AllProducts["manufacturer"]): Promise<ManufacturerInfo> => {
    const config = {
        headers: {
            'Cache-Control': 'public,max-age=300,immutable'
        }
    };

    const response = await axios.get<ManufacturerInfo>(`${baseUrl}/${manufacturer}`, config);
    return response.data;
};

export default {
    getAll
};