import {
  adminUsersFail,
  loginFail,
  logoutFail,
  ownProfileFail,
  registerFail,
  successAdminUsers,
  successLogin,
  successLogout,
  successOwnProfile,
  successRegister,
  tryAdminUsers,
  tryLogin,
  tryLogout,
  tryOwnProfile,
  tryRegister,
} from "../../features/user/userSlice";
import axios from "axios";
import { serverUrl } from "../../store";

// user register action
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(tryRegister());

    const { data } = await axios.post(
      `${serverUrl}/register`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(successRegister(data.message));
  } catch (error) {
    dispatch(registerFail(error.response.data.message));
  }
};

// login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(tryLogin());

    const { data } = await axios.post(
      `${serverUrl}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch(successLogin(data.message));
  } catch (error) {
    dispatch(loginFail(error.response.data.message));
  }
};

// get own profile
export const ownProfile = () => async (dispatch) => {
  try {
    dispatch(tryOwnProfile());

    const { data } = await axios.get(`${serverUrl}/ownprofile`, {
      withCredentials: true,
    });
    dispatch(successOwnProfile(data));
  } catch (error) {
    dispatch(ownProfileFail(error.response.data.message));
  }
};

// get all users admin
export const getAllAdminUsers = () => async (dispatch) => {
  try {
    dispatch(tryAdminUsers());

    const { data } = await axios.get(`${serverUrl}/admin/users`, {
      withCredentials: true,
    });

    console.log(data)
    //dispatch(successAdminUsers(data.users));
  } catch (error) {
    dispatch(adminUsersFail(error.response.data.message));
  }
};

// logout user
export const logout = () => async (dispatch) => {
  try {
    dispatch(tryLogout());

    const { data } = await axios.get(
      `${serverUrl}/logout`,

      {
        withCredentials: true,
      }
    );

    dispatch(successLogout(data.message));
  } catch (error) {
    dispatch(logoutFail(error.response.data.message));
  }
};
