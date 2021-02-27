import axios from "axios";
import { AllProducts } from "../types";

const baseUrl = '/v2/products';

const getAll = async (product: AllProducts["type"]): Promise<AllProducts[]> => {
    const config = {
        headers: {
            'x-force-error-mode': 'all'
        }
    };

    const response = await axios.get<AllProducts[]>(`${baseUrl}/${product}`, config);
    return response.data;
};

export default {
    getAll
};