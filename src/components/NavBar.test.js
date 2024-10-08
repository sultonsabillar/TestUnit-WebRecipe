/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from './NavBar';

describe('NavBar Component', () => {
  const mockSearch = jest.fn(); 

  beforeEach(() => {
    render(<NavBar search={mockSearch} />);
  });

  test('renders My Recipe title', () => {
    const titleElement = screen.getByTestId('my-recipe');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('My Recipe'); 
  });

  test('renders search form', () => {
    const formElement = screen.getByTestId('form-search');
    expect(formElement).toBeInTheDocument(); 

    const inputElement = screen.getByPlaceholderText('Recipe Name');
    expect(inputElement).toBeInTheDocument(); 

    const buttonElement = screen.getByRole('button', { name: /search/i }); 
    expect(buttonElement).toBeInTheDocument(); 
  });

  test('calls search function on form submit with input value', () => {
    const inputElement = screen.getByPlaceholderText('Recipe Name');
    fireEvent.change(inputElement, { target: { value: 'Pasta' } }); 
    fireEvent.submit(screen.getByTestId('form-search')); 

    expect(mockSearch).toHaveBeenCalledWith('Pasta'); 
    expect(inputElement.value).toBe(''); 
  });
});
