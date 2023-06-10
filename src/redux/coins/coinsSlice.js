import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCoins = createAsyncThunk('getCoins', async () => {
  try {
    const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en';
    const response = await fetch(API_URL);
    const data = await response.json();
    const currency = {};
    data.forEach((item) => {
      currency[item.symbol] = {
        symbol: item.symbol,
        name: item.name,
        current_price: item.current_price,
        icon_url: item.image,
      };
    });
    return currency;
  } catch (error) {
    throw new Error(error.message);
  }
});

const coinsSlice = createSlice({
  name: 'currency',
  initialState: {
    currency: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.loading = false;
        state.currency = action.payload;
      })
      .addCase(getCoins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default coinsSlice.reducer;
