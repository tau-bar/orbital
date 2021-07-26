import React from 'react';
import LoadingBar from '../loading-bar.component';
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


let getByTestId;

beforeEach(() => {
    const component = render(<LoadingBar percentage = {50} />);
    getByTestId = component.getByTestId;
})

afterEach(cleanup)

test("loading bar text correct", () => {
    const loadingEl = getByTestId("loading-bar")
    expect(loadingEl.textContent).toBe("Loading virus model: 50%");
})
