// app.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IncDec from './Components/IncDec'; // Adjust the path accordingly
import { BrowserRouter } from 'react-router-dom';

// describe('MockTodo component', () => {
//   it('should render MockTodo component', () => {
//     render(
//       <BrowserRouter>
//         <IncDec />
//       </BrowserRouter>
//     );

//     // Add assertions to ensure that the component renders correctly
//     const incrementButton = screen.getByText(/Increment/i);
//     const decrementButton = screen.getByText(/Decrement/i);

//     expect(incrementButton).toBeInTheDocument();
//     expect(decrementButton).toBeInTheDocument();
//   });

//   it('should increment count when Increment button is clicked', () => {
//     render(
//       <BrowserRouter>
//         <IncDec />
//       </BrowserRouter>
//     );

//     const incrementButton = screen.getByText(/Increment/i);
//     fireEvent.click(incrementButton);

//     const countElement = screen.getByText(/1/); // Assuming count starts at 0
//     expect(countElement).toBeInTheDocument();
//   });

//   it('should decrement count when Decrement button is clicked and not go below 0', () => {
//     render(
//       <BrowserRouter>
//         <IncDec />
//       </BrowserRouter>
//     );

//     const decrementButton = screen.getByText(/Decrement/i);
//     fireEvent.click(decrementButton);

//     // Use queryByText to get all elements with the text "0"
//     const countElements = screen.queryAllByText(/0/);

//     // Assert that there is at least one element with the text "0"
//     expect(countElements.length).toBeGreaterThanOrEqual(1);

//     // Additional assertions can be made on each element if needed
//     countElements.forEach((countElement) => {
//       expect(countElement).toBeInTheDocument();
//     });
//   });
// });

test('renders with initial count of 0', () => {
  const { getByText } = render(<IncDec />);
  const countElement = getByText(/0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments count on button click', () => {
  const { getByText } = render(<IncDec />);
  const incrementButton = getByText(/Increment/i);
  fireEvent.click(incrementButton);
  const countElement = getByText(/1/i);
  expect(countElement).toBeInTheDocument();
});

test('decrements count on button click', () => {
  const { getByText } = render(<IncDec />);
  const decrementButton = getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  const countElement = getByText(/0/i);
  expect(countElement).toBeInTheDocument();
});

test('does not decrement below zero', () => {
  const { getByText } = render(<IncDec />);
  const decrementButton = getByText(/Decrement/i);
  fireEvent.click(decrementButton);
  const countElement = getByText(/0/i);
  expect(countElement).toBeInTheDocument();

  fireEvent.click(decrementButton);
  const countElementAfterSecondClick = getByText(/0/i);
  expect(countElementAfterSecondClick).toBeInTheDocument();
});
