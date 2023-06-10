import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getCoins } from '../redux/coins/coinsSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('fetches coins correctly', async () => {
  const store = mockStore();

  await store.dispatch(getCoins())
    .catch((error) => error);

  const actions = store.getActions();

  expect(actions[0].type).toBe('getCoins/pending');

  if (actions[1].type === 'getCoins/fulfilled') {
    expect(actions[1].payload).toBeDefined();
  }

  expect(store.getActions()).toMatchSnapshot();
});
