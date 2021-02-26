export interface ProductInfo {
    id: string;
    name: string;
    color: string[];
    price: number;
    manufacturer: string;
    type: string;
}

export interface Facemasks extends ProductInfo {
    type: "facemasks"
}

export interface Beanies extends ProductInfo {
    type: "beanies"
}

export interface Gloves extends ProductInfo {
    type: "gloves"
}

export type AllProducts =
    | Facemasks
    | Beanies
    | Gloves;