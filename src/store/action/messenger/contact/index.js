import {
  FETCH_MESSENGER_CONTACT_LIST,
  MESSENGER_CONTACT_ERROR,
  REMOVE_CONTACT,
  ADD_CONTACT,
  UPDATE_CONTACT,
} from "../../../type";
import { customAxios } from "../../../../api/api";

export const fetchContactList = () => async (dispatch) => {
  try {
    const { data: contacts } = await customAxios().get(
      `https://random-data-api.com/api/users/random_user?size=6`
    );

    dispatch({
      type: FETCH_MESSENGER_CONTACT_LIST,
      payload: {
        contacts,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_CONTACT_ERROR,
        payload: { error: error.message },
      });
    }
  }
};

export const addContact = (contact) => (dispatch) => {
  try {
    dispatch({
      type: ADD_CONTACT,
      payload: {
        contact,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_CONTACT_ERROR,
        payload: { error: error.message },
      });
    }
  }
};

export const removeContact = (id) => (dispatch) => {
  try {
    dispatch({
      type: REMOVE_CONTACT,
      payload: {
        id,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_CONTACT_ERROR,
        payload: { error: error.message },
      });
    }
  }
};

export const updateContact = (id, contact) => (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CONTACT,
      payload: {
        id,
        contact,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_CONTACT_ERROR,
        payload: { error: error.message },
      });
    }
  }
};
