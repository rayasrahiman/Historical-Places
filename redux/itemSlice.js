import { createSlice } from '@reduxjs/toolkit';
import data from '../data.json'

const itemSlice = createSlice({
  name: 'items',
  initialState: data,
  reducers: {
    toggleVisited: (state, action) => {
      const item = state.find(item => item.id === action.payload);
      if (item) {
        item.visited = !item.visited;
      }
    },
  },
});

export const { toggleVisited } = itemSlice.actions;
export default itemSlice.reducer;
