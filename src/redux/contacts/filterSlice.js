import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilterValue(_, action) {
      return action.payload;
    },
  },
});

export const persistefilterReducer = filterSlice.reducer;
export const { setFilterValue } = filterSlice.actions;
