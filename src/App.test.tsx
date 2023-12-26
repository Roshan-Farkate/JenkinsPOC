// App.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App component with initial count and buttons', () => {
  render(<App />);

  // Check if the initial count is rendered
  const initialCountElement = screen.getByText(/0/i);
  expect(initialCountElement).toBeInTheDocument();

  // Check if the Increment and Decrement buttons are rendered
  const incrementButton = screen.getByText(/Increment/i);
  const decrementButton = screen.getByText(/Decrement/i);
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();
});

test('increments count when Increment button is clicked', () => {
  render(<App />);

  // Find the Increment button and click it
  const incrementButton = screen.getByText(/Increment/i);
  fireEvent.click(incrementButton);

  // Check if the count is updated after clicking Increment
  const updatedCountElement = screen.getByText(/1/i);
  expect(updatedCountElement).toBeInTheDocument();
});

test('decrements count when Decrement button is clicked', () => {
  render(<App />);

  // Find the Decrement button and click it
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);

  // Check if the count is updated after clicking Decrement
  const updatedCountElement = screen.getByText(/0/i);
  expect(updatedCountElement).toBeInTheDocument();
});

test('does not allow count to go below zero', () => {
  render(<App />);

  // Find the Decrement button and click it multiple times
  const decrementButton = screen.getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  fireEvent.click(decrementButton);

  // Check if the count stays at zero
  const zeroCountElement = screen.getByText(/0/i);
  expect(zeroCountElement).toBeInTheDocument();
});
