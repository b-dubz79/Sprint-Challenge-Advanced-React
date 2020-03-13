import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from './App'


test('click me text', () => {
    const { getByText } = render(<App />);
    getByText(/click me/i)
    
});

test('make sure second person appears', () => {
    const { getByText } = render(<App/>);
    getByText(/you clicked/i);
})