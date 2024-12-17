import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react19', () => {
  render(<App />);
  const linkElement = screen.getByText(/react19/i);
  expect(linkElement).toBeInTheDocument();
});
