import React from "react";
import { render, RenderResult } from "@testing-library/react"; // fireEvent is from here
import { prettyDOM } from "@testing-library/dom";
import FacemasksList from "../FacemasksList";

describe('<FacemasksList />', () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<FacemasksList />);
    });

    test('<FacemaskList /> rendered with text', () => {
        const text = component.container.querySelector("#text");
        expect(text).toBeDefined();
        expect(text).toHaveTextContent("This is the product list");
        if (text !== null) {
            console.log(prettyDOM(text));
        }
    });
});