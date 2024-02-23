import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    tryRegister: (state) => {
      state.loading = true;
      state.isAuthenticate = false;
    },
    successRegister: (state, action) => {
      state.loading = false;
      state.isAuthenticate = true;
      state.message = action.payload;
    },
    registerFail: (state, action) => {
      state.loading = false;
      state.isAuthenticate = false;
      state.error = action.payload;
    },

    // login

    tryLogin: (state) => {
      state.loading = true;
      state.isAuthenticate = false;
    },
    successLogin: (state, action) => {
      state.loading = false;
      state.isAuthenticate = true;
      state.message = action.payload;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.isAuthenticate = false;
      state.error = action.payload;
    },

    // get own profile

    tryOwnProfile: (state) => {
      state.loading = true;
    },
    successOwnProfile: (state, action) => {
      state.loading = false;
      state.isAuthenticate = true;
      state.user = action.payload;
    },
    ownProfileFail: (state, action) => {
      state.loading = false;
      state.isAuthenticate = false;
      state.error = action.payload;
    },

    // get Admin users

    tryAdminUsers: (state) => {
      state.loading = true;
    },
    successAdminUsers: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    adminUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // logout reducer
    tryLogout: (state) => {
      state.loading = true;
    },
    successLogout: (state, action) => {
      state.loading = false;
      state.isAuthenticate = false;
      state.user = null;
      state.message = action.payload;
    },
    logoutFail: (state, action) => {
      state.loading = false;
      state.isAuthenticate = true;
      state.error = action.payload;
    },
    clearMessage: (state) => {
      state.message = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  tryLogin,
  successLogin,
  loginFail,
  tryLogout,
  successLogout,
  logoutFail,
  clearError,
  tryRegister,
  successRegister,
  registerFail,
  tryOwnProfile,
  successOwnProfile,
  ownProfileFail,
  clearMessage,
  tryAdminUsers,
  successAdminUsers,
  adminUsersFail
} = userSlice.actions;

export default userSlice.reducer;
