import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('should render footer text correctly', () => {
  render(<Footer />);
  
  
  const footerText = screen.getByTestId('footer-text');
  expect(footerText).toHaveTextContent('© 2024 Company, Inc. All rights reserved.');
});

test('should render facebook link with correct href', () => {
  render(<Footer />);

  
  const facebookLink = screen.getByTestId('link-facebook');
  expect(facebookLink).toHaveAttribute('href', 'https://facebook.com');
});

test('should render X (Twitter) link with correct href', () => {
  render(<Footer />);

  
  const twitterLink = screen.getByTestId('link-x');
  expect(twitterLink).toHaveAttribute('href', 'https://x.com');
});

test('should render Instagram link with correct href', () => {
  render(<Footer />);

  
  const instagramLink = screen.getByTestId('link-instagram');
  expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/');
});
