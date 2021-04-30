import {
  MESSENGER_MESSAGE_IS_LOADING,
  FETCH_MESSENGER_MESSAGE_LIST,
  ADD_MESSAGE,
  UPDATE_MESSAGE,
  REMOVE_MESSAGE,
  MESSENGER_MESSAGES_ERROR,
} from "../../../type";

const messengerMessageInitialState = {
  messages: [],
  isLoading: false,
  error: "",
};

const MessengerMessageReducer = (
  state = messengerMessageInitialState,
  action
) => {
  if (action.type === MESSENGER_MESSAGE_IS_LOADING) {
    return {
      ...state,
      isLoading: true,
      error: "",
    };
  }

  switch (action.type) {
    case FETCH_MESSENGER_MESSAGE_LIST: {
      const { messages } = action.payload;

      return {
        ...state,
        messages,
      };
    }

    case ADD_MESSAGE: {
      const { message } = action.payload;
      const messages = [message, ...messages];

      return {
        ...state,
        messages,
      };
    }
    case UPDATE_MESSAGE: {
      const { id, newMessage } = action.payload;
      const messages = state.messages.map((message) => {
        return message.id === id ? newMessage : message;
      });

      return {
        ...state,
        messages,
      };
    }
    case REMOVE_MESSAGE: {
      const { id } = action.payload;
      const messages = state.messages.filter((message) => {
        return message.id !== id;
      });

      return {
        ...state,
        messages,
      };
    }

    case MESSENGER_MESSAGES_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        error: error,
      };

    default:
      return state;
  }
};

export default MessengerMessageReducer;
