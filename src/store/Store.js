import { configureStore, createSlice } from "@reduxjs/toolkit";

// Initial state with an empty users array and null currentUser
const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [], // Stores registered users
    currentUser: null, // Stores the logged-in user
  },
  reducers: {
    register: (state, action) => {
      const { email, password } = action.payload;
      // Check if email already exists
      const existingUser = state.users.find((user) => user.email === email);
      if (!existingUser) {
        state.users.push({ email, password });
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const validUser = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (validUser) {
        state.currentUser = validUser;
      }
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { register, login, logout } = authSlice.actions;
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
