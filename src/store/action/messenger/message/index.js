import {
  FETCH_MESSENGER_MESSAGE_LIST,
  ADD_MESSAGE,
  UPDATE_MESSAGE,
  REMOVE_MESSAGE,
  MESSENGER_MESSAGES_ERROR,
} from "../../../type";

export const fetchMessagesList = () => (dispatch) => {
  try {
    dispatch({
      type: FETCH_MESSENGER_MESSAGE_LIST,
      payload: {
        messages: [],
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_MESSAGES_ERROR,
        payload: { error: error.message },
      });
    }
  }
};

export const addMessage = (message) => (dispatch) => {
  try {
    dispatch({
      type: ADD_MESSAGE,
      payload: {
        message,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_MESSAGES_ERROR,
        payload: { error: error.message },
      });
    }
  }
};

export const removeMeesage = (id) => (dispatch) => {
  try {
    dispatch({
      type: REMOVE_MESSAGE,
      payload: {
        id,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_MESSAGES_ERROR,
        payload: { error: error.message },
      });
    }
  }
};

export const updateMessage = (id, message) => (dispatch) => {
  try {
    dispatch({
      type: UPDATE_MESSAGE,
      payload: {
        id,
        message,
      },
    });
  } catch (error) {
    if (error.message) {
      dispatch({
        type: MESSENGER_MESSAGES_ERROR,
        payload: { error: error.message },
      });
    }
  }
};
