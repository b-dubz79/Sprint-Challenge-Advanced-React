import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from './App'


test('click me text', () => {
    const { getByText } = render(<App />);
    getByText(/click me/i)
    
});

test('check if button text is rendering', () => {
    const { getByText } = render(<App/>);
    getByText(/you clicked/i);
})