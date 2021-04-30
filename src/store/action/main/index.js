import { UPDATE_USER, UPDATE_ERROR, SET_LOADING } from "../../type";

export const updateError = (payload) => {
  return { type: UPDATE_ERROR, payload };
};

export const updateUser = (payload) => {
  return { type: UPDATE_USER, payload };
};

export const setLoading = (payload) => {
  return { type: SET_LOADING, payload };
};
