import axios from "axios";
import { AllProducts } from "../types";

const baseUrl = '/v2/products';

const getAll = async (product: AllProducts["type"]): Promise<AllProducts[]> => {
    const config = {
        headers: {
            'Cache-Control': 'public, max-age=300, immutable' // 5 mins (60 secs * 5 mins)
        }
    };

    const response = await axios.get<AllProducts[]>(`${baseUrl}/${product}`, config);
    return response.data;
};

export default {
    getAll
};