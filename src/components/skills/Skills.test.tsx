import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Skills from './Skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JS'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders a list of skills', () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(skills.length);
  });

  test('renders login button', () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.getByRole('button', { name: 'Login' });
    expect(loginButtonElement).toBeInTheDocument();
  });
  test('not rendering start learning button', () => {
    render(<Skills skills={skills} />);
    const learningBtnElement = screen.queryByRole('button', {
      name: 'Start learning',
    });
    expect(learningBtnElement).not.toBeInTheDocument();
  });
});
