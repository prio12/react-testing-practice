import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Applications from './Applications';

describe('Applications', () => {
  test('renders', () => {
    render(<Applications />);

    //get by role
    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    //get by label text
    const nameElement2 = screen.getByLabelText('Name');
    expect(nameElement2).toBeInTheDocument();

    //getBy placeholder
    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    //get by display value
    const nameElement4 = screen.getByDisplayValue('Prio');
    expect(nameElement4).toBeInTheDocument();

    //get by alt text
    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    //get by text
    const textElement = screen.getByText('All fields are mandatory');
    expect(textElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    const pageHeadingElement = screen.getByRole('heading', { level: 1 });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole('heading', { level: 2 });
    expect(sectionHeadingElement).toBeInTheDocument();

    const jobLocationsElements = screen.getByRole('combobox');
    expect(jobLocationsElements).toBeInTheDocument();

    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
