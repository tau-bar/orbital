import React from 'react';
import CustomButton from '../custom-button.component';
import { cleanup, render,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


let getByTestId;

beforeEach(() => {
    const component = render(<CustomButton
        map
        filled
        onClick = {() => console.log("button pressed")}
        >
        Press
    </CustomButton>);
    getByTestId = component.getByTestId;
})

afterEach(cleanup)


test("button renders with correct text", () => {
    const buttonEl = getByTestId("custom-button")
    expect(buttonEl.textContent).toBe("Press");
})

test("button renders with correct className", () => {
    const buttonEl = getByTestId("custom-button")
    expect(buttonEl.className).toBe("custom-button filled map");
})

test("onClick working", () => {
    const buttonEl = getByTestId("custom-button")
    const consoleSpy = jest.spyOn(console, 'log');
    fireEvent.click(buttonEl);
    expect(consoleSpy).toHaveBeenCalledWith('button pressed');
})