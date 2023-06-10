import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer correctly', () => {
  const { container } = render(<Footer />);
  expect(container.firstChild).toMatchSnapshot();
});
