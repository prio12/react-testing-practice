//* requirements
// !Test 1: renders "Hello"
// ! Test 2: renders "Hello {name}" if a name prop is passed

import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Greet from './Greet';

describe('Greet Component', () => {
  test('renders Hello', () => {
    render(<Greet />);
    const textElement = screen.getByText('Hello');
    expect(textElement).toBeInTheDocument();
  });
});

test('renders Hello with a Name props', () => {
  render(<Greet name="Prio" />);
  const textElement = screen.getByText('Hello Prio');
  expect(textElement).toBeInTheDocument();
});
