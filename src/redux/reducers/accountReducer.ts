import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const headers = {
  accept: "application/json",
  "x-cg-demo-api-key": "CG-mDVVqLm5xBDjvcVq523LnAmB",
};

const url = 'http://localhost:5280/api/auth';

const INITIAL_STATE = {
  user: [],
};

const accountSlice = createSlice({
  name: 'account',
  initialState: INITIAL_STATE,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder.addCase(pocketLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
    });
  },
});

export const accountReducer = accountSlice.reducer;
export const accountActions = accountSlice.actions;
export const accountSelector = (state:any) => state.account;

export const pocketLogin = createAsyncThunk(
  "account/pocketLogin",
  async ({ username, password }:{username:string,password:string}) => {
    const response = await axios.post(
      url + "/login", // Adjust endpoint if necessary
      { username, password }, // Request payload
      { headers } // Configuration object
    );
    console.log(response);
    return response.data;
  }
);
