import React from 'react';
import InfoSection from '../info-section.component';
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


let getByTestId;

beforeEach(() => {
    const component = render(<InfoSection title = "Title">Lorem ipsum</InfoSection>);
    getByTestId = component.getByTestId;
})

afterEach(cleanup)

test("info section text correct", () => {
    const titleEl = getByTestId("info-title");
    expect(titleEl.textContent).toBe("Title");
    const textEl = getByTestId("info-text");
    expect(textEl.textContent).toBe("Lorem ipsum");
})
