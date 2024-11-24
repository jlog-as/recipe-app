import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Recipe Sharing App title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Recipe Sharing App/i);
  expect(titleElement).toBeInTheDocument();
});
