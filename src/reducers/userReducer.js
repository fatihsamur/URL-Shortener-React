import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    email: '',
    token: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setLogOut: (state) => {
      state.name = '';
      state.email = '';
      state.token = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { setName, setEmail, setToken, setLogOut } = userSlice.actions;

export default userSlice.reducer;
