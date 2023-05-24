import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialStateAuth = {
  user: {},
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleFulfilledAuth = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogOut = state => {
  state.user = {};
  state.token = null;
  state.isLoggedIn = false;
};

const handlePendingRefresh = state => {
  state.isRefreshing = true;
};

const handleFulfilledRefresh = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRejectedRefresh = state => {
  state.isRefreshing = false;
};

const arrThunks = [register, logIn];
const getAction = type => arrThunks.map(el => el[type]);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  extraReducers: builder =>
    builder

      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.pending, handlePendingRefresh)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedRefresh)
      .addMatcher(isAnyOf(...getAction('fulfilled')), handleFulfilledAuth),
});

export const authReduser = authSlice.reducer;
