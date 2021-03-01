import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import { FacemaskIcon } from "../Icons";

describe('<FacemaskIcon />', () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<FacemaskIcon availability="INSTOCK" />);
    });

    test('<FacemaskIcon /> render with appropriate color/picture', () => {
        const svg = component.container.querySelector("svg");
        expect(svg).toBeDefined();
        expect(svg).toHaveClass("fa-head-side-mask");
        expect(svg).toHaveAttribute('color', 'green');
        if (svg !== null) {
            console.log(prettyDOM(svg));
        }
    });
});