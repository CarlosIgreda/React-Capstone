import metricsReducer, { asset } from '../redux/metrics/metricsSlice';

describe('metricsSlice reducer', () => {
  it('should handle asset', () => {
    const initialState = { data: null };
    const payload = { value: 10 };

    const newState = metricsReducer(initialState, asset(payload));

    expect(newState).toMatchSnapshot();
  });
});

describe('metricsSlice actions', () => {
  it('should create an action to set asset data', () => {
    const payload = { value: 10 };
    const expectedAction = {
      type: 'metrics/asset',
      payload,
    };

    expect(asset(payload)).toEqual(expectedAction);
  });
});
