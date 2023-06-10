import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Metrics from '../components/Metrics';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

test('renders metrics correctly', () => {
  useSelector.mockReturnValue({
    coinSymbol: 'BTC',
    coinImage: 'btc-image-url',
    coinName: 'Bitcoin',
    coinPrice: 50000,
  });

  const { container } = render(<Metrics />);

  expect(container.firstChild).toMatchSnapshot();
});
