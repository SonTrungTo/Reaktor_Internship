import React from "react";
import { render, RenderResult } from "@testing-library/react"; // fireEvent is from here
import { prettyDOM } from "@testing-library/dom";
import { ProductList } from "../ProductsList";

describe('<ProductList />', () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<ProductList />);
    });

    test('<ProductList /> rendered with text', () => {
        const text = component.container.querySelector("#text");
        expect(text).toBeDefined();
        expect(text).toHaveTextContent("This is the product list");
        if (text !== null) {
            console.log(prettyDOM(text));
        }
    });
});