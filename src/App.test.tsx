import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headerExists = screen.getByText(/Welcome to a Ghost Page!/i) !== null;
  expect(headerExists).toBe(true);
});
