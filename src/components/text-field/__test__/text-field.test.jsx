import React from 'react';
import CustomTextField from '../text-field.component';
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


let getByTestId;

beforeEach(() => {
    const component = render(<CustomTextField/>);
    getByTestId = component.getByTestId;
})

afterEach(cleanup)

test("text-field className correct", () => {
    const tfEl = getByTestId("text-field")
    expect(tfEl.className).toBe("custom-text-field");
})
