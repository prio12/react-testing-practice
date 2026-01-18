import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Greet from './Greet';

test('Testing greet component', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
});
