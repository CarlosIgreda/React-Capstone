import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CoinsList from '../components/Main';

const mockStore = configureStore([thunk]);

test('renders coins list correctly', () => {
  const store = mockStore({
    coins: {
      currency: {
        BTC: {
          symbol: 'BTC',
          icon_url: 'btc-icon-url',
          name: 'Bitcoin',
          current_price: 50000,
        },
      },
      loading: false,
      error: null,
    },
  });

  const { container } = render(
    <Router>
      <Provider store={store}>
        <CoinsList />
      </Provider>
    </Router>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
