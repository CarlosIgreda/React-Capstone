import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

test('renders header correctly', () => {
  const { container } = render(
    <Router>
      <Header />
    </Router>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
