import React from "react";
import { render, RenderResult } from "@testing-library/react";
import { prettyDOM } from "@testing-library/dom";
import { FacemaskIcon } from "../Icons";

describe('<FacemaskIcon />', () => {
    let component: RenderResult;

    test('<FacemaskIcon /> render with green facemask when INSTOCK', () => {
        component = render(<FacemaskIcon availability="INSTOCK" />);
        const svg = component.container.querySelector("svg");
        expect(svg).toBeDefined();
        expect(svg).toHaveClass("fa-head-side-mask");
        expect(svg).toHaveAttribute('color', 'green');
        if (svg !== null) {
            console.log(prettyDOM(svg));
        }
    });

    test('<FacemaskIcon /> render with yellow facemask when LESSTHAN10', () => {
        component = render(<FacemaskIcon availability="LESSTHAN10" />);
        const svg = component.container.querySelector("svg");
        expect(svg).toBeDefined();
        expect(svg).toHaveClass("fa-head-side-mask");
        expect(svg).toHaveAttribute('color', 'yellow');
    });

    test('<FacemaskIcon /> render with red facemask when OUTOFSTOCK', () => {
        component = render(<FacemaskIcon availability="OUTOFSTOCK" />);
        const svg = component.container.querySelector("svg");
        expect(svg).toBeDefined();
        expect(svg).toHaveClass("fa-head-side-mask");
        expect(svg).toHaveAttribute('color', 'red');
    });
});

// The very similar tests can be made to BeanieIcon and GlovesIcon