import React from "react";
import { render, RenderResult } from "@testing-library/react"; // fireEvent is from here
import { prettyDOM } from "@testing-library/dom";
import ProductItem from "../ProductItem";

import { AllProducts } from "../../types";

describe('<ProductItem />', () => {
    let component: RenderResult;
    const facemasksData: AllProducts = {
        id: "1",
        name: "Son To",
        color: [
            "blue"
        ],
        price: 1,
        manufacturer: "ippal",
        type: "facemasks"
    };

    beforeEach(() => {
        component = render(<ProductItem {...facemasksData} />);
    });

    test('<ProductItem /> rendered with type "facemasks"', () => {
        const card = component.container.querySelector("#testCard");
        expect(card).toBeDefined();
        expect(card).toHaveTextContent("Son To");
        expect(card).toHaveTextContent("ippal");
        if (card !== null) {
            console.log(prettyDOM(card));
        }
    });
});