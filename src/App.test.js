/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import fetchMock from 'jest-fetch-mock';


beforeEach(() => {
  fetchMock.enableMocks();
});

beforeEach(() => {
  fetch.resetMocks();
});

test('should render recipe cards correctly after fetching', async () => {
  
  fetch.mockResponseOnce(JSON.stringify([
    {
      id: 1,
      title: 'Recipe 1',
      image: 'https://example.com/recipe1.jpg',
      rating: 5,
    },
    
  ]));

  render(<App />); 

  
  await waitFor(() => {
    expect(screen.getByTestId('img-recipe-1')).toBeInTheDocument();
    expect(screen.getByTestId('title-recipe-1')).toBeInTheDocument();
    expect(screen.getByTestId('rating-recipe-1')).toBeInTheDocument();
  });
});
