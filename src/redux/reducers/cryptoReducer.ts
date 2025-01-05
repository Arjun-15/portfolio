import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-mDVVqLm5xBDjvcVq523LnAmB"
    },
};
const INITIAL_STATE = {
    coins: [],
    currentPage: 1,
    searchResults: [],
    coin: {},
    chartData:[]
};
const url = "https://api.coingecko.com/api/v3/coins/";

export const fetchInitial = createAsyncThunk("coins/fetchInitial", () => fetch(url + "markets?vs_currency=usd", options).then(x => x.json()));
export const searchCoins = createAsyncThunk("coins/searchCoins", async (payload: any) => {
    const data = await fetch(url+ "markets?vs_currency=usd", options).then(x => x.json())
        .then(data => {
            const filteredCoins = data.filter((coin: any) => coin.name.toLowerCase().includes(payload.toLowerCase()));
            return filteredCoins;
        });
    return data;
});
export const filterCoinbyId = createAsyncThunk("coins/filterCoinbyId", async (payload: string) => {
    const data = await fetch(url + payload.toLowerCase(), options).then(x => x.json());
    return data;
});
export const getCoinChartData = createAsyncThunk('coins/getCoinChartData', async ({ coinId, day }: { coinId: string; day: number }) => {
    if (coinId && day) {
        const response = await fetch(`${url}${coinId.toLowerCase()}/market_chart?vs_currency=usd&days=${day}`, options);
        const data = await response.json();
        return data;
    } throw new Error('Invalid coinId or day');
});

// New Combined Thunk
export const fetchCoinDetailsAndChart = createAsyncThunk(
  'coins/fetchCoinDetailsAndChart',
  async ({ coinId, day }: { coinId: string; day: number }, { dispatch }) => {
    // Fetch Coin Details
    const coinDetails = await dispatch(filterCoinbyId(coinId)).unwrap();
    // Fetch Coin Chart Data
    const chartData = await dispatch(getCoinChartData({ coinId, day })).unwrap();
    // Return combined data
    return { coinDetails, chartData };
  }
);

export const cryptoSlice = createSlice({
    name: 'coins',
    initialState: INITIAL_STATE,
    reducers: {
        //
    },
    extraReducers(builder) {
        builder
            .addCase(fetchInitial.fulfilled, (state, action) => {
                state.coins = action.payload;
            })
            .addCase(searchCoins.fulfilled, (state, action) => {
                state.searchResults = action.payload;
            })
            .addCase(filterCoinbyId.fulfilled, (state, action) => {
                state.coin = action.payload;
            })
            .addCase(getCoinChartData.fulfilled, (state, action) => {
                state.chartData = action.payload;
            })
            // Handle the new combined thunk
            .addCase(fetchCoinDetailsAndChart.fulfilled, (state, action) => {
                state.coin = action.payload.coinDetails;
                state.chartData = action.payload.chartData;
            });
    },
});

export const coinsReducer = cryptoSlice.reducer;
export const coinsActions = cryptoSlice.actions;
export const coinsSelector = (state: any) => state.coinsReducer;
