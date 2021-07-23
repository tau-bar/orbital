import React from 'react';
import ParallaxContent from '../parallax-content.component';
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let getByTestId;

beforeEach(() => {
    const component = render(<ParallaxContent
        type = "light"
        origin = "China"
        year = "2003"
        deaths = "10">
        Lorem Ipsum
    </ParallaxContent>);
    getByTestId = component.getByTestId;
})

afterEach(() => {
    cleanup();
}) 

test("headers render with correct text", () => {
    const yearEl = getByTestId("parallax-year")
    expect(yearEl.textContent).toBe("Year pandemic started");
    const originEl = getByTestId("parallax-origin")
    expect(originEl.textContent).toBe("Origin");
    const deathsEl = getByTestId("parallax-deaths")
    expect(deathsEl.textContent).toBe("Deaths");
})

test("correct classnames inside for headers", () => {
    const yearEl = getByTestId("parallax-year")
    const originEl = getByTestId("parallax-origin")
    const deathsEl = getByTestId("parallax-deaths")
    expect(yearEl.className).toBe("parallax-small-text");
    expect(originEl.className).toBe("parallax-small-text");
    expect(deathsEl.className).toBe("parallax-small-text");
})

test("data render with correct text", () => {
    const yearEl = getByTestId("year-data")
    const originEl = getByTestId("origin-data")
    const deathsEl = getByTestId("deaths-data")
    expect(yearEl.textContent).toBe("2003");
    expect(originEl.textContent).toBe("China");
    expect(deathsEl.textContent).toBe("10");
})

test("correct classnames inside for data", () => {
    const yearEl = getByTestId("year-data")
    const originEl = getByTestId("origin-data")
    const deathsEl = getByTestId("deaths-data")
    expect(yearEl.className).toBe("parallax-big-text");
    expect(originEl.className).toBe("parallax-big-text");
    expect(deathsEl.className).toBe("parallax-big-text");
})

test("correct classname and text content inside description", () => {
    const descEl = getByTestId("parallax-desc")
    expect(descEl.className).toBe("parallax-desc");
    expect(descEl.textContent).toBe("Lorem Ipsum");
})