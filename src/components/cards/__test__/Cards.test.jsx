import React from 'react';
import Cards from '../Cards';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(() => {
    cleanup();
}) 

it("cards matches snapshot", () => {
    const cards = renderer.create(
        <Router>
            <Cards/>
        </Router>
        ).toJSON();
    expect(cards).toMatchSnapshot();
})

