import React from 'react';
import ParallaxTitle from '../parallax-title.component';
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<ParallaxTitle>Title</ParallaxTitle>);
    getByTestId = component.getByTestId;
})

afterEach(() => {
    cleanup();
}) 

test("title render with correct text", () => {
    const titleEl = getByTestId("parallax-title")
    expect(titleEl.textContent).toBe("Title");
})

test("title render with correct className", () => {
    const titleEl = getByTestId("parallax-title")
    expect(titleEl.className).toBe("parallax-title");
})