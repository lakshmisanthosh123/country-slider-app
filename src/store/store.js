import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    data: [],
    page: 1,
  },
  reducers: {
    setCountries(state, action) {
      state.data = action.payload;
    },
    incrementPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
    },
  },
});

export const { setCountries, incrementPage, resetPage } = countrySlice.actions;

const store = configureStore({
  reducer: {
    countries: countrySlice.reducer,
  },
});

export const useAppDispatch = () => useDispatch();
export default store;
