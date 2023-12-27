// App.test.js

import { render, screen, fireEvent } from '@testing-library/react';
import IncDec from './Components/IncDec';
import { BrowserRouter } from 'react-router-dom';

// test('renders App component with initial count and buttons', () => {
//   render(<App />);

//   // Check if the initial count is rendered
//   const initialCountElement = screen.getByText(/0/i);
//   expect(initialCountElement).toBeInTheDocument();

//   // Check if the Increment and Decrement buttons are rendered
//   const incrementButton = screen.getByText(/Increment/i);
//   const decrementButton = screen.getByText(/Decrement/i);
//   expect(incrementButton).toBeInTheDocument();
//   expect(decrementButton).toBeInTheDocument();
// });

// test('increments count when Increment button is clicked', () => {
//   render(<App />);

//   // Find the Increment button and click it
//   const incrementButton = screen.getByText(/Increment/i);
//   fireEvent.click(incrementButton);

//   // Check if the count is updated after clicking Increment
//   const updatedCountElement = screen.getByText(/1/i);
//   expect(updatedCountElement).toBeInTheDocument();
// });

// test('decrements count when Decrement button is clicked', () => {
//   render(<App />);

//   // Find the Decrement button and click it
//   const decrementButton = screen.getByText(/Decrement/i);
//   fireEvent.click(decrementButton);

//   // Check if the count is updated after clicking Decrement
//   const updatedCountElement = screen.getByText(/0/i);
//   expect(updatedCountElement).toBeInTheDocument();
// });

// test('does not allow count to go below zero', () => {
//   render(<App />);

//   // Find the Decrement button and click it multiple times
//   const decrementButton = screen.getByText(/Decrement/i);
//   fireEvent.click(decrementButton);
//   fireEvent.click(decrementButton);

//   // Check if the count stays at zero
//   const zeroCountElement = screen.getByText(/0/i);
//   expect(zeroCountElement).toBeInTheDocument();
// });

const MockTodo = () => {
  return (
      <BrowserRouter>
          <IncDec />
      </BrowserRouter>
  );
};  

it('should increment count when Increment button is clicked', () => {
  render(<MockTodo />);
  const incrementButton = screen.getByText(/Increment/i);
  
  fireEvent.click(incrementButton);

  const countElement = screen.getByText(/1/); // Assuming count starts at 0
  expect(countElement).toBeInTheDocument();
}); 

it('should decrement count when Decrement button is clicked and not go below 0', () => {
  render(<MockTodo />);
  const decrementButton = screen.getByText(/Decrement/i);

  fireEvent.click(decrementButton);

  // Use queryByText to get all elements with the text "0"
  const countElements = screen.queryAllByText(/0/);

  // Assert that there is at least one element with the text "0"
  expect(countElements.length).toBeGreaterThanOrEqual(1);

  // Additional assertions can be made on each element if needed
  countElements.forEach((countElement) => {
      expect(countElement).toBeInTheDocument();
  });
});