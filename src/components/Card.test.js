import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockRecipe = {
  id: 1,
  name: 'Classic Margherita Pizza',
  image: 'https://example.com/margherita.jpg',
  rating: 4.5,
  tags: ['Pizza', 'Vegetarian']
};

test('should render recipe card with correct image, title, rating, tags, and link', () => {
  render(<Card el={mockRecipe} />);

  
  const image = screen.getByTestId('img-recipe-1');
  expect(image).toHaveAttribute('src', 'https://example.com/margherita.jpg');
  expect(image).toHaveAttribute('alt', 'Classic Margherita Pizza');

  
  const title = screen.getByTestId('title-recipe-1');
  expect(title).toHaveTextContent('Classic Margherita Pizza');

  
  const rating = screen.getByTestId('rating-recipe-1');
  expect(rating).toHaveTextContent('4.5');

  
  const tag1 = screen.getByTestId('tag-recipe-Pizza');
  expect(tag1).toHaveTextContent('Pizza');

  const tag2 = screen.getByTestId('tag-recipe-Vegetarian');
  expect(tag2).toHaveTextContent('Vegetarian');

  
  const link = screen.getByTestId('link-recipe-1');
  expect(link).toHaveAttribute('href', 'https://dummyjson.com/recipes/1');
  expect(link).toHaveTextContent('READ MORE');
});
