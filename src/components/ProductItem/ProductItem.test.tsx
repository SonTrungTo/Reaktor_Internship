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

    const beaniesData: AllProducts = {
        id: "2",
        name: "My hat",
        color: [
            "red", "yellow"
        ],
        price: 200,
        manufacturer: "Son To Oy",
        type: "beanies"
    };

    const glovesData: AllProducts = {
        id: "3",
        name: "My gloves",
        color: [
            "green", "white", "grey"
        ],
        price: 134,
        manufacturer: "Ivanka Oy",
        type: "gloves"
    };

    // I realize I can use waitFor async/await to test the data received from AvailabilityIcon,
    // but I have no time anymore.

    test('<ProductItem /> rendered with type "facemasks"', () => {
        component = render(<ProductItem {...facemasksData} />);
        const card = component.container.querySelector("#testCard");
        const price = component.container.querySelector("#price");
        const colorSvg = component.container.querySelectorAll("#colorSvg");
        expect(card).toBeDefined();
        expect(card).toHaveTextContent("Son To");
        expect(card).toHaveTextContent("ippal");
        expect(price).toHaveTextContent("1");
        expect(colorSvg).toHaveLength(1);
        expect(colorSvg[0]).toHaveAttribute('color', 'blue');
        if (card !== null) {
            console.log(prettyDOM(card));
        }
    });

    test('<ProductItem /> rendered with type "beanies"', () => {
        component = render(<ProductItem {...beaniesData} />);
        const card = component.container.querySelector("#testCard");
        const price = component.container.querySelector("#price");
        const colorSvg = component.container.querySelectorAll("#colorSvg");
        expect(card).toBeDefined();
        expect(card).toHaveTextContent("My hat");
        expect(card).toHaveTextContent("Son To Oy");
        expect(price).toHaveTextContent("200");
        expect(colorSvg).toHaveLength(2);
        expect(colorSvg[0]).toHaveAttribute('color', 'red');
        expect(colorSvg[1]).toHaveAttribute('color', 'yellow');
    });

    test('<ProductItem /> rendered with type "gloves"', () => {
        component = render(<ProductItem {...glovesData} />);
        const card = component.container.querySelector("#testCard");
        const price = component.container.querySelector("#price");
        const manufacturer = component.container.querySelector("#manufacturer");
        const name = component.container.querySelector("#name");
        const colorSvg = component.container.querySelectorAll("#colorSvg");
        expect(card).toBeDefined();
        expect(name).toHaveTextContent("My gloves");
        expect(manufacturer).toHaveTextContent("Ivanka Oy");
        expect(price).toHaveTextContent("134");
        expect(colorSvg).toHaveLength(3);
        expect(colorSvg[0]).toHaveAttribute('color', 'green');
        expect(colorSvg[1]).toHaveAttribute('color', 'white');
        expect(colorSvg[2]).toHaveAttribute('color', 'grey');
    });
});